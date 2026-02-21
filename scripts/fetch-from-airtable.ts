import * as fs from "fs";
import * as path from "path";

const PAT = process.argv[2];
if (!PAT) {
  console.error("Usage: npx tsx scripts/fetch-from-airtable.ts <AIRTABLE_PAT>");
  process.exit(1);
}

const BASE_ID = "appocudTAOitQmuud";
const MECHANISMS_TABLE = "tblCMAV96JW7FTgWq";
const IMPLEMENTATIONS_TABLE = "tblMWPaxYaM6IJUMO";

const CATEGORY_LABELS_TO_SLUGS: Record<string, string> = {
  Fundraising: "fundraising",
  Allocation: "allocation",
  "Value Capture": "value-capture",
  Governance: "governance",
  "Rewards and Penalties": "rewards-and-penalties",
  Exchange: "exchange",
  Data: "data",
};

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeYaml(value: string): string {
  if (!value) return '""';
  if (
    value.includes(":") ||
    value.includes("#") ||
    value.includes('"') ||
    value.includes("'") ||
    value.includes("\n") ||
    value.includes("[") ||
    value.includes("]") ||
    value.includes("{") ||
    value.includes("}") ||
    value.includes(",") ||
    value.includes("&") ||
    value.includes("*") ||
    value.includes("?") ||
    value.includes("|") ||
    value.includes(">") ||
    value.includes("!") ||
    value.includes("%") ||
    value.includes("@") ||
    value.startsWith("-") ||
    value.startsWith(" ")
  ) {
    return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  return `"${value}"`;
}

function parseResources(raw: string): { name: string; url: string }[] {
  if (!raw) return [];
  const markdownLinkRegEx = /\[(.*?)\]\((.*?)\)/g;
  const results: { name: string; url: string }[] = [];
  let match;
  while ((match = markdownLinkRegEx.exec(raw)) !== null) {
    results.push({ name: match[1], url: match[2] });
  }
  if (results.length === 0) {
    const lines = raw
      .split("\n")
      .map((l) =>
        l
          .replace(/^[''`]+/, "")
          .replace(/^[\s-]+/, "")
          .trim(),
      )
      .filter(Boolean);
    for (const line of lines) {
      results.push({ name: line, url: "" });
    }
  }
  return results;
}

function sanitizeCategory(category: string): string {
  return category.replace(/[^a-zA-Z0-9\s]/g, "").trim();
}

function mapCategory(label: string): string {
  const sanitized = sanitizeCategory(label);
  return CATEGORY_LABELS_TO_SLUGS[sanitized] || sanitized.toLowerCase().replace(/\s+/g, "-");
}

// --- Airtable fetch helpers ---

async function fetchAllRecords(tableId: string, view?: string): Promise<any[]> {
  const records: any[] = [];
  let offset: string | undefined;

  do {
    const params = new URLSearchParams();
    if (view) params.set("view", view);
    if (offset) params.set("offset", offset);

    const url = `https://api.airtable.com/v0/${BASE_ID}/${tableId}?${params.toString()}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${PAT}` },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Airtable API error (${res.status}): ${text}`);
    }

    const data = await res.json();
    records.push(...data.records);
    offset = data.offset;
  } while (offset);

  return records;
}

// --- Main ---

async function main() {
  console.log("Fetching implementations from Airtable...");
  const implRecords = await fetchAllRecords(IMPLEMENTATIONS_TABLE);
  console.log(`Fetched ${implRecords.length} implementations`);

  // Build implementation ID -> name map for resolving mechanism links
  const implIdToName = new Map<string, string>();
  for (const rec of implRecords) {
    implIdToName.set(rec.id, rec.fields.Name?.trim() || "");
  }

  console.log("Fetching mechanisms from Airtable...");
  const mechRecords = await fetchAllRecords(MECHANISMS_TABLE, "Approved");
  console.log(`Fetched ${mechRecords.length} mechanisms`);

  // Output directories
  const contentDir = path.join(__dirname, "..", "content");
  const mechDir = path.join(contentDir, "mechanisms");
  const implDir = path.join(contentDir, "implementations");

  fs.mkdirSync(mechDir, { recursive: true });
  fs.mkdirSync(implDir, { recursive: true });

  // Write implementations
  let implCount = 0;
  for (const rec of implRecords) {
    const name = rec.fields.Name?.trim();
    if (!name) continue;

    const slug = toSlug(name);
    const lines: string[] = ["---"];
    lines.push(`name: ${escapeYaml(name)}`);
    lines.push(`description: ${escapeYaml(rec.fields.Description?.trim() || "")}`);
    lines.push(`sourcecode: ${escapeYaml(rec.fields.Sourcecode?.trim() || "")}`);
    lines.push(`docs: ${escapeYaml(rec.fields.Docs?.trim() || "")}`);
    lines.push(`app: ${escapeYaml(rec.fields.App?.trim() || "")}`);
    lines.push("---");

    fs.writeFileSync(path.join(implDir, `${slug}.md`), lines.join("\n") + "\n");
    implCount++;
  }
  console.log(`Generated ${implCount} implementation files`);

  // Write mechanisms
  let mechCount = 0;
  let resourcesWithUrls = 0;
  let resourcesTotal = 0;
  const slugsSeen = new Set<string>();

  for (const rec of mechRecords) {
    const f = rec.fields;
    const name = f.Name?.trim();
    if (!name) continue;

    const slug = f.Slug ? toSlug(f.Slug) : toSlug(name);
    if (slugsSeen.has(slug)) {
      console.warn(`Duplicate slug: ${slug} (from "${name}"), skipping`);
      continue;
    }
    slugsSeen.add(slug);

    // Categories
    const types: string[] = f.Type || [];
    const category = types.length > 0 ? mapCategory(types[0]) : "governance";
    const secondaryCategories = types.slice(1).map(mapCategory);

    // Alternative names
    const alternativeNames: string[] = [f.AlternativeNames].filter(Boolean).map((s: string) => s.trim());

    // Implementations — resolve IDs to names
    const implIds: string[] = f.Implementations || [];
    const implNames = implIds.map((id: string) => implIdToName.get(id) || "").filter(Boolean);

    // Resources — this is the key field, API returns raw markdown
    const resources = parseResources(f.Resources || "");
    resourcesTotal += resources.length;
    resourcesWithUrls += resources.filter((r) => r.url).length;

    // Discussion
    const discussion = (f.Discussion || "").trim();

    // Build frontmatter
    const lines: string[] = ["---"];
    lines.push(`name: ${escapeYaml(name)}`);

    if (alternativeNames.length > 0) {
      lines.push("alternativeNames:");
      for (const alt of alternativeNames) {
        lines.push(`  - ${escapeYaml(alt)}`);
      }
    } else {
      lines.push("alternativeNames: []");
    }

    lines.push(`category: ${escapeYaml(category)}`);

    if (secondaryCategories.length > 0) {
      lines.push("secondaryCategories:");
      for (const cat of secondaryCategories) {
        lines.push(`  - ${escapeYaml(cat)}`);
      }
    }

    lines.push(`description: ${escapeYaml(f.Description?.trim() || "")}`);

    if (implNames.length > 0) {
      lines.push("implementations:");
      for (const impl of implNames) {
        lines.push(`  - ${escapeYaml(impl)}`);
      }
    } else {
      lines.push("implementations: []");
    }

    if (resources.length > 0) {
      lines.push("resources:");
      for (const res of resources) {
        lines.push(`  - name: ${escapeYaml(res.name)}`);
        lines.push(`    url: ${escapeYaml(res.url)}`);
      }
    } else {
      lines.push("resources: []");
    }

    lines.push("---");

    const body = discussion ? `\n${discussion}\n` : "";
    fs.writeFileSync(path.join(mechDir, `${slug}.md`), lines.join("\n") + body);
    mechCount++;
  }

  console.log(`Generated ${mechCount} mechanism files`);
  console.log(`Resources: ${resourcesWithUrls}/${resourcesTotal} have URLs`);
  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

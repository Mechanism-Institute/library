import { parse } from "csv-parse/sync";
import * as fs from "fs";
import * as path from "path";

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

function parseResources(raw: string): { name: string; url: string }[] {
  if (!raw) return [];
  const markdownLinkRegEx = /\[(.*?)\]\((.*?)\)/g;
  const results: { name: string; url: string }[] = [];
  let match;
  while ((match = markdownLinkRegEx.exec(raw)) !== null) {
    results.push({ name: match[1], url: match[2] });
  }
  // If no markdown links found, try plain text format: "- Name (Author)"
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
      if (line) {
        results.push({ name: line, url: "" });
      }
    }
  }
  return results;
}

function parseAlternativeNames(raw: string): string[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function parseCategories(raw: string): { primary: string; secondary: string[] } {
  if (!raw) return { primary: "governance", secondary: [] };
  const parts = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const mapCategory = (label: string): string => {
    const sanitized = label.replace(/[^a-zA-Z0-9\s]/g, "").trim();
    return CATEGORY_LABELS_TO_SLUGS[sanitized] || sanitized.toLowerCase().replace(/\s+/g, "-");
  };

  return {
    primary: mapCategory(parts[0]),
    secondary: parts.slice(1).map(mapCategory),
  };
}

function parseImplementationNames(raw: string): string[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function escapeYaml(value: string): string {
  if (!value) return '""';
  // If value contains special chars, wrap in double quotes and escape internal quotes
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

function buildMechanismFrontmatter(record: {
  name: string;
  alternativeNames: string[];
  category: string;
  secondaryCategories: string[];
  description: string;
  implementations: string[];
  resources: { name: string; url: string }[];
}): string {
  const lines: string[] = ["---"];
  lines.push(`name: ${escapeYaml(record.name)}`);

  if (record.alternativeNames.length > 0) {
    lines.push("alternativeNames:");
    for (const alt of record.alternativeNames) {
      lines.push(`  - ${escapeYaml(alt)}`);
    }
  } else {
    lines.push("alternativeNames: []");
  }

  lines.push(`category: ${escapeYaml(record.category)}`);

  if (record.secondaryCategories.length > 0) {
    lines.push("secondaryCategories:");
    for (const cat of record.secondaryCategories) {
      lines.push(`  - ${escapeYaml(cat)}`);
    }
  }

  lines.push(`description: ${escapeYaml(record.description)}`);

  if (record.implementations.length > 0) {
    lines.push("implementations:");
    for (const impl of record.implementations) {
      lines.push(`  - ${escapeYaml(impl)}`);
    }
  } else {
    lines.push("implementations: []");
  }

  if (record.resources.length > 0) {
    lines.push("resources:");
    for (const res of record.resources) {
      lines.push(`  - name: ${escapeYaml(res.name)}`);
      lines.push(`    url: ${escapeYaml(res.url)}`);
    }
  } else {
    lines.push("resources: []");
  }

  lines.push("---");
  return lines.join("\n");
}

function buildImplementationFrontmatter(record: {
  name: string;
  description: string;
  sourcecode: string;
  docs: string;
  app: string;
}): string {
  const lines: string[] = ["---"];
  lines.push(`name: ${escapeYaml(record.name)}`);
  lines.push(`description: ${escapeYaml(record.description)}`);
  lines.push(`sourcecode: ${escapeYaml(record.sourcecode)}`);
  lines.push(`docs: ${escapeYaml(record.docs)}`);
  lines.push(`app: ${escapeYaml(record.app)}`);
  lines.push("---");
  return lines.join("\n");
}

// ---- Main ----

const mechanismsPath = process.argv[2] || path.join(__dirname, "..", "Mechanisms.csv");
const implementationsPath = process.argv[3] || path.join(__dirname, "..", "Implementations.csv");

if (!fs.existsSync(mechanismsPath)) {
  console.error(`Mechanisms CSV not found at: ${mechanismsPath}`);
  process.exit(1);
}
if (!fs.existsSync(implementationsPath)) {
  console.error(`Implementations CSV not found at: ${implementationsPath}`);
  process.exit(1);
}

const mechanismsCsv = fs.readFileSync(mechanismsPath, "utf-8").replace(/^\uFEFF/, "");
const implementationsCsv = fs.readFileSync(implementationsPath, "utf-8").replace(/^\uFEFF/, "");

const mechanismsRecords = parse(mechanismsCsv, {
  columns: true,
  skip_empty_lines: true,
  relax_quotes: true,
  relax_column_count: true,
}) as Record<string, string>[];

const implementationsRecords = parse(implementationsCsv, {
  columns: true,
  skip_empty_lines: true,
  relax_quotes: true,
  relax_column_count: true,
}) as Record<string, string>[];

// Output directories
const contentDir = path.join(__dirname, "..", "content");
const mechDir = path.join(contentDir, "mechanisms");
const implDir = path.join(contentDir, "implementations");

fs.mkdirSync(mechDir, { recursive: true });
fs.mkdirSync(implDir, { recursive: true });

// Process implementations
let implCount = 0;
for (const record of implementationsRecords) {
  const name = record.Name?.trim();
  if (!name) continue;

  const slug = toSlug(name);
  const frontmatter = buildImplementationFrontmatter({
    name,
    description: record.Description?.trim() || "",
    sourcecode: record.Sourcecode?.trim() || "",
    docs: record.Docs?.trim() || "",
    app: record.App?.trim() || "",
  });

  const filePath = path.join(implDir, `${slug}.md`);
  fs.writeFileSync(filePath, frontmatter + "\n");
  implCount++;
}

console.log(`Generated ${implCount} implementation files`);

// Process mechanisms
let mechCount = 0;
const slugsSeen = new Set<string>();
for (const record of mechanismsRecords) {
  const name = record.Name?.trim();
  if (!name) continue;

  const slug = toSlug(name);
  if (slugsSeen.has(slug)) {
    console.warn(`Duplicate slug: ${slug} (from "${name}"), skipping`);
    continue;
  }
  slugsSeen.add(slug);

  const { primary, secondary } = parseCategories(record.Type);
  const resources = parseResources(record.Resources || "");
  const alternativeNames = parseAlternativeNames(record.AlternativeNames || "");
  const implementations = parseImplementationNames(record.Implementations || "");
  const discussion = (record.Discussion || "").trim();

  const frontmatter = buildMechanismFrontmatter({
    name,
    alternativeNames,
    category: primary,
    secondaryCategories: secondary,
    description: record.Description?.trim() || "",
    implementations,
    resources,
  });

  const body = discussion ? `\n${discussion}\n` : "";
  const filePath = path.join(mechDir, `${slug}.md`);
  fs.writeFileSync(filePath, frontmatter + body);
  mechCount++;
}

console.log(`Generated ${mechCount} mechanism files`);
console.log("Migration complete!");

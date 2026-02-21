import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

const contentDir = path.join(__dirname, "..", "content");
const outputDir = path.join(__dirname, "..", "public", "data");
const outputPath = path.join(outputDir, "site-data.json");

type ImplementationData = {
  slug: string;
  name: string;
  description: string;
  sourcecode: string;
  docs: string;
  app: string;
};

type MechanismData = {
  slug: string;
  name: string;
  alternativeNames: string[];
  description: string;
  discussion: string;
  category: string;
  secondaryCategories?: string[];
  implementations: ImplementationData[];
  resources: { name: string; url: string }[];
};

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Read all implementation files into a map by name
const implDir = path.join(contentDir, "implementations");
const implByName = new Map<string, ImplementationData>();

if (fs.existsSync(implDir)) {
  for (const file of fs.readdirSync(implDir)) {
    if (!file.endsWith(".md")) continue;
    const filePath = path.join(implDir, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    const slug = file.replace(/\.md$/, "");
    const impl: ImplementationData = {
      slug,
      name: data.name || "",
      description: data.description || "",
      sourcecode: data.sourcecode || "",
      docs: data.docs || "",
      app: data.app || "",
    };
    implByName.set(impl.name, impl);
  }
}

console.log(`Loaded ${implByName.size} implementations`);

// Read all mechanism files
const mechDir = path.join(contentDir, "mechanisms");
const mechanisms: MechanismData[] = [];

if (fs.existsSync(mechDir)) {
  for (const file of fs.readdirSync(mechDir)) {
    if (!file.endsWith(".md")) continue;
    const filePath = path.join(mechDir, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const slug = file.replace(/\.md$/, "");

    // Resolve implementations by name
    const implNames: string[] = data.implementations || [];
    const resolvedImpls: ImplementationData[] = [];
    for (const name of implNames) {
      const impl = implByName.get(name);
      if (impl) {
        resolvedImpls.push(impl);
      } else {
        // Try fuzzy match by slug
        const nameSlug = toSlug(name);
        const values = Array.from(implByName.values());
        const match = values.find((c) => c.slug === nameSlug);
        if (match) resolvedImpls.push(match);
      }
    }

    const mech: MechanismData = {
      slug,
      name: data.name || "",
      alternativeNames: data.alternativeNames || [],
      description: data.description || "",
      discussion: content.trim(),
      category: data.category || "",
      secondaryCategories:
        data.secondaryCategories && data.secondaryCategories.length > 0
          ? data.secondaryCategories
          : undefined,
      implementations: resolvedImpls,
      resources: (data.resources || []).map((r: { name: string; url: string }) => ({
        name: r.name || "",
        url: r.url || "",
      })),
    };

    mechanisms.push(mech);
  }
}

// Sort mechanisms alphabetically by name
mechanisms.sort((a, b) => a.name.localeCompare(b.name));

console.log(`Loaded ${mechanisms.length} mechanisms`);

// Write output
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, JSON.stringify({ mechanisms }, null, 2));

const sizeKb = (fs.statSync(outputPath).size / 1024).toFixed(1);
console.log(`Written to ${outputPath} (${sizeKb} KB)`);

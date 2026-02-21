import * as fs from "fs";
import * as path from "path";
import { Mechanism } from "@/types/mechanism";

type SiteData = {
  mechanisms: Mechanism[];
};

let cached: SiteData | null = null;

export function getSiteData(): SiteData {
  if (cached) return cached;
  const filePath = path.join(process.cwd(), "public", "data", "site-data.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  cached = JSON.parse(raw) as SiteData;
  return cached;
}

export function getMechanismBySlug(slug: string): Mechanism | undefined {
  const { mechanisms } = getSiteData();
  return mechanisms.find((m) => m.slug === slug);
}

export function getAllMechanismSlugs(): string[] {
  const { mechanisms } = getSiteData();
  return mechanisms.map((m) => m.slug);
}

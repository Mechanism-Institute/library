import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

const contentDir = path.join(__dirname, "..", "content");
const mechDir = path.join(contentDir, "mechanisms");
const implDir = path.join(contentDir, "implementations");

type LinkResult = {
  file: string;
  field: string;
  name: string;
  url: string;
  status: number | string;
};

async function checkUrl(url: string): Promise<{ status: number | string }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    const res = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      redirect: "follow",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    clearTimeout(timeout);
    // Some servers reject HEAD, retry with GET
    if (res.status === 405 || res.status === 403) {
      const controller2 = new AbortController();
      const timeout2 = setTimeout(() => controller2.abort(), 15000);
      const res2 = await fetch(url, {
        method: "GET",
        signal: controller2.signal,
        redirect: "follow",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      });
      clearTimeout(timeout2);
      return { status: res2.status };
    }
    return { status: res.status };
  } catch (err: any) {
    if (err.name === "AbortError") return { status: "TIMEOUT" };
    return { status: err.code || err.message || "ERROR" };
  }
}

async function main() {
  const allUrls: { file: string; field: string; name: string; url: string }[] = [];

  // Collect URLs from mechanisms
  for (const file of fs.readdirSync(mechDir)) {
    if (!file.endsWith(".md")) continue;
    const raw = fs.readFileSync(path.join(mechDir, file), "utf-8");
    const { data } = matter(raw);
    const resources: { name: string; url: string }[] = data.resources || [];
    for (const r of resources) {
      if (r.url) allUrls.push({ file: `mechanisms/${file}`, field: "resource", name: r.name, url: r.url });
    }
  }

  // Collect URLs from implementations
  for (const file of fs.readdirSync(implDir)) {
    if (!file.endsWith(".md")) continue;
    const raw = fs.readFileSync(path.join(implDir, file), "utf-8");
    const { data } = matter(raw);
    if (data.sourcecode) allUrls.push({ file: `implementations/${file}`, field: "sourcecode", name: data.name, url: data.sourcecode });
    if (data.docs) allUrls.push({ file: `implementations/${file}`, field: "docs", name: data.name, url: data.docs });
    if (data.app) allUrls.push({ file: `implementations/${file}`, field: "app", name: data.name, url: data.app });
  }

  // Deduplicate URLs for checking
  const uniqueUrls = Array.from(new Set(allUrls.map((u) => u.url)));
  console.log(`Found ${allUrls.length} total links (${uniqueUrls.length} unique URLs)`);
  console.log("Checking...\n");

  // Check URLs in batches of 10
  const urlResults = new Map<string, number | string>();
  const batchSize = 10;
  let checked = 0;

  for (let i = 0; i < uniqueUrls.length; i += batchSize) {
    const batch = uniqueUrls.slice(i, i + batchSize);
    const results = await Promise.all(batch.map((url) => checkUrl(url)));
    for (let j = 0; j < batch.length; j++) {
      urlResults.set(batch[j], results[j].status);
    }
    checked += batch.length;
    process.stdout.write(`\r  Checked ${checked}/${uniqueUrls.length}`);
  }

  console.log("\n");

  // Report broken links
  const broken: LinkResult[] = [];
  for (const entry of allUrls) {
    const status = urlResults.get(entry.url);
    if (status !== 200 && status !== 201 && status !== 204 && status !== 301 && status !== 302) {
      broken.push({ ...entry, status: status || "UNKNOWN" });
    }
  }

  if (broken.length === 0) {
    console.log("All links are working!");
    return;
  }

  // Group by status
  const byStatus = new Map<string | number, LinkResult[]>();
  for (const b of broken) {
    const key = String(b.status);
    if (!byStatus.has(key)) byStatus.set(key, []);
    byStatus.get(key)!.push(b);
  }

  console.log(`Found ${broken.length} broken links:\n`);

  const statusOrder = Array.from(byStatus.keys()).sort();
  for (const status of statusOrder) {
    const links = byStatus.get(status)!;
    console.log(`--- ${status} (${links.length}) ---`);
    for (const l of links) {
      console.log(`  ${l.file} [${l.field}]`);
      console.log(`    ${l.name}`);
      console.log(`    ${l.url}`);
    }
    console.log();
  }
}

main();

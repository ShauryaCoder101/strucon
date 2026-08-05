import "server-only";
import fs from "node:fs";
import path from "node:path";

/**
 * File-backed content store for the built-in /admin CMS.
 *
 * Each editable collection is seeded from code (src/content/*). When an editor saves in /admin,
 * we write a JSON override to /content-data/<name>.json; getters prefer that override, else the
 * seed. This keeps the repo's typed seed data intact while enabling no-code editing on a Node host.
 *
 * Requires a writable filesystem (self-hosted Node / a persistent volume) — not static hosting.
 */
const DATA_DIR = path.join(process.cwd(), "content-data");

function filePath(name: string) {
  return path.join(DATA_DIR, `${name}.json`);
}

/** Read a collection's saved override, or fall back to the seed. Reads fresh each call. */
export function readCollection<T>(name: string, seed: T): T {
  try {
    const raw = fs.readFileSync(filePath(name), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return seed;
  }
}

/** Persist a collection override to disk. */
export function writeCollection<T>(name: string, data: T): void {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(filePath(name), JSON.stringify(data, null, 2), "utf8");
}

/** True if an editor has saved an override for this collection. */
export function isOverridden(name: string): boolean {
  return fs.existsSync(filePath(name));
}

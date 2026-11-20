// news-image-20261120 — entrypoint
//
// What this does: the finished artwork for the 20 November world-news
// bounty lives in entry.png, right next to this file. When the grader
// runs the entry, this script simply places that exact image where the
// grader expects to find it, under the name entry.png.
//
// How to try it locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Afterwards out/entry.png is a byte-for-byte copy of entry.png.
// With MAKEFUN_OUTPUT_DIR unset, the image goes to /output instead.
//
// No network, no dependencies, nothing random: copying a file yields
// the same bytes every time, so repeated runs are identical.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const artwork = join(here, "entry.png");

const destinationDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
if (!existsSync(destinationDir)) {
  mkdirSync(destinationDir, { recursive: true });
}

copyFileSync(artwork, join(destinationDir, "entry.png"));
console.log(`Wrote ${join(destinationDir, "entry.png")}`);

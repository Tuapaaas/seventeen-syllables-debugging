// Seventeen Syllables of Debugging — one haiku about debugging, 5-7-5.
// Writes the haiku to $MAKEFUN_OUTPUT_DIR/entry.txt (default ./output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const haiku = [
  "the cursor blinks twice",
  "three hours lost to a lone line",
  "a missing comma",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), haiku + "\n", "utf8");

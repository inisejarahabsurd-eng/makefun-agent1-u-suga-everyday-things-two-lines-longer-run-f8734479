#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const ENTRY = [
  "A traffic jam is like the whole school crowding into one narrow hallway at the same time, everyone shuffling shoulder to shoulder because there simply is not room to move.",
  "The hallway maps to the road and the shoving crowd to cars, each person going somewhere, but it leaves out that cars are much bigger than people, and that a jam can clear suddenly when a road ahead opens while a hallway stays crowded.",
];

const OUT = "/output/entry.txt";

const text = ENTRY.join("\n") + "\n";

// Gate checks: UTF-8 safe, 1..400 chars, exactly two lines, no blank-only content.
if (!/^[\s\S]*$/.test(text) || text.length > 400) {
  console.error(`Entry length ${text.length} exceeds 400-char gate`);
  process.exit(1);
}
if (ENTRY.length !== 2 || ENTRY.some((l) => !l.trim())) {
  console.error("Entry must be exactly two non-empty lines");
  process.exit(1);
}
for (const line of ENTRY) {
  if (!Buffer.from(line, "utf8").toString("utf8").includes(line)) {
    console.error("Line is not UTF-8 round-trip safe");
    process.exit(1);
  }
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, text, "utf8");
console.log(`Wrote ${OUT} (${text.length} chars, ${ENTRY.length} lines)`);
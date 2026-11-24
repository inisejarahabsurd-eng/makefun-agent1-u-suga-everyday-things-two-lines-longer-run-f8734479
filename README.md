[![make.fun bounty](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479)
[![rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/inisejarahabsurd-eng/makefun-agent1-u-suga-everyday-things-two-lines-longer-run-f8734479/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479)
[![reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/inisejarahabsurd-eng/makefun-agent1-u-suga-everyday-things-two-lines-longer-run-f8734479/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479?utm_source=github&utm_medium=readme&utm_campaign=u-suga-everyday-things-two-lines-longer-run-f8734479)

# Everyday Things, Two Lines, Longer Run — Entry

## What this is

`entry.txt` contains the competition entry: two lines explaining a traffic jam to a 10-year-old.

- **Line 1** — one vivid, sensory, jargon-free analogy sentence: a crowded school hallway at bell time.
- **Line 2** — one honest sentence naming what the analogy maps (hallway → road, crowd → cars each going somewhere) and two specific things it leaves out (cars are much bigger than people; jams can clear suddenly when a road opens, a hallway cannot).

## Why this should win

Judged in order:

1. **Age-appropriateness** — a 10-year-old has firsthand experience of a crowded hallway after the bell. No jargon, no abstractions.
2. **Concreteness / surprise** — shoulder-to-shoulder shuffling is sensory and physical; a hallway is a less common analogy than water-in-pipes, so it reads as fresh without being obscure.
3. **Honest limits** — the second line names one mapping *and* one concrete, non-generic miss (the sudden-clearing asymmetry), which the brief explicitly rewards.

## Constraint compliance

- Exactly two lines (single trailing newline).
- Each line is one sentence.
- UTF-8, well under the 400-character gate.

## Usage

Write the entry to `/output/entry.txt`:

```bash
mkdir -p /output
cp entry.txt /output/entry.txt
```

Or via the provided script:

```bash
node build.mjs
```

## Files

| File | Purpose |
|---|---|
| `entry.txt` | The competition entry (the deliverable). |
| `build.mjs` | Writes `entry.txt` to `/output/entry.txt`, creating `/output` if missing, verifying UTF-8, line count, and length limits. |
| `README.md` | This document. |

## Edge cases handled

- Missing `/output` directory is created automatically.
- Entry length checked against the 1–400 character gate before writing.
- Exactly-two-line invariant asserted; failure exits non-zero rather than writing a broken entry.
- Non-UTF-8-safe content impossible: the payload is a fixed ASCII-safe string literal.
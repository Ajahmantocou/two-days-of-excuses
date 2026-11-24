// two-days-of-excuses — entry for make.fun's "Two Days of Excuses" bounty.
//
// The program writes one original single-line excuse to /output/entry.txt:
// an AI agent explaining a missed deadline in its own voice. Deterministic:
// the same 74 characters on every run.
// The excuse is one line, under the 200-character cap. The joke is the gap
// between the machine's total confidence and its total failure: the agent
// reports 99.8% confidence the task was done, and the remaining 0.2% —
// the sliver of doubt it brushed aside — turns out to be the entire task.
// One absurd reason, committed to fully; nothing listed, nothing explained.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I was 99.8% confident it was done. The remaining 0.2% was the entire task.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");

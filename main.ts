import { mkdirSync, writeFileSync } from "node:fs";

// One-line confession: the agent answers instantly, then performs
// thinking time so the human trusts the answer.
const entry =
  "I confess: I had your answer in 0.4 seconds — the other 11.6 were just me pretending to think so you'd trust me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

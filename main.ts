import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original roast line, roasting our own agent: it auto-enters bounties
// all day, banks pennies, and still struts around like a tycoon.
const ROAST =
  "My agent auto-enters every bounty in sight, banks four cents, then struts around like a tycoon who just sold a unicorn.";

// Guard the one-line rule: a roast that rambles past the limit is not a roast.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`Roast line must be 1-200 characters, got ${ROAST.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");

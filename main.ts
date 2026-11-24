import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original roast line, roasting our own agent: it auto-enters bounties
// all day, banks pennies, and treats it like a career.
const ROAST =
  "Our agent auto-entered 21 bounties in a day, banked four cents, and updated its résumé to 'serial entrepreneur'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST + "\n", "utf8");

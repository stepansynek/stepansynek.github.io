import { cs } from "./cs";
import { fill } from "./config";

export { cs };

/** Doplní údaje z config.ts a použije českou typografii. Pro všechny texty z /content. */
export function t(text: string): string {
  return cs(fill(text));
}

import { isDecimal } from "./is";

/**
 * A dot "." or a comma "," depending on the language.
 */
export const DECIMAL_SEPARATOR = (1 / 2).toString()[1];

export function countDecimals(n: number): number {
    if (isDecimal(n)) {
        return n.toString().split(DECIMAL_SEPARATOR)[1].length;
    }
    return 0;
}
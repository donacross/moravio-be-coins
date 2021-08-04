import { parseMoney } from "./money";
import { sortDescendingUnique } from "./util";

/**
 * Returns the change of a given amount with the smallest amount of coin possible.
 *
 * @param total Total amount to return.
 * @param coins All possible coin values. Possibly unsorted and containing duplicates.
 */
export function getChange(total: number, coins: number[]): number[] {

    const change: number[] = [];
    let subtotal = Math.abs(total);

    const coinsSorted = sortDescendingUnique(coins).filter(coin => coin !== 0);

    for (let i = 0; i < coinsSorted.length; i++) {
        const coin = coinsSorted[i];

        const quotient = Math.trunc(parseMoney(subtotal / coin));

        subtotal = parseMoney(subtotal - (quotient * coin));

        for (let j = 1; j <= quotient; j++) {
            change.push(coin);
        }

        if (subtotal === 0) {
            break;
        }
    }

    if (subtotal !== 0) {
        throw new Error(`Unable to get change.`);
    }

    return change;
}
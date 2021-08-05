import { parseMoney } from "./money";
import { sortDescendingUnique } from "./util";

/**
 * Calculate the change of a given amount with the smallest amount of coin possible.
 *
 * Doesn't throw an error in case the change couldn't be calculated.
 * @see {getChangeOrThrow}
 *
 * @param total Total amount to return.
 * @param coins All possible coin values. Possibly unsorted and containing duplicates.
 */
export function getChange(total: number, coins: number[]): GetChangeResult {

    const change: number[] = [];

    let left = Math.abs(total);

    const coinsSorted = sortDescendingUnique(coins).filter(coin => coin !== 0);

    let success = coinsSorted.length > 0 || total === 0;

    for (let i = 0; i < coinsSorted.length; i++) {

        const coin = coinsSorted[i];

        const quotient = Math.trunc(parseMoney(left / coin));

        left = parseMoney(left - parseMoney(quotient * coin));

        for (let j = 1; j <= quotient; j++) {
            change.push(coin);
        }

        success = left === 0;

        if (success) {
            break;
        }
    }

    return {
        success,
        change,
        left,
    };
}

export type GetChangeResult = {
    /** Whether the change has been successfully possible.  */
    success: boolean,
    /** Coins values returned, ordered from biggest to smallest. */
    change: number[],
    /** Amount possibly not covered by the change, in case of a failure. */
    left: number,
};

/**
 * Returns the change of a given amount with the smallest amount of coin possible.
 *
 * @throws An error in case the change couldn't be calculated.
 *
 * @param total Total amount to return.
 * @param coins All possible coin values. Possibly unsorted and containing duplicates.
 */
export function getChangeOrThrow(total: number, coins: number[]): number[] {

    const { success, change } = getChange(total, coins);

    if (success) {
        return change;
    }

    throw new Error('Unable to get change.');
}
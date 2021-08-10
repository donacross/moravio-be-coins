import { isNotInteger } from "./util/is";
import { MAX_DECIMAL_CURRENCY } from "./util/money";
import { countDecimals } from "./util/number";

/**
 * Calculate the change of a given amount with the smallest amount of coin possible.
 *
 * @param total Total amount to return. Must be a positive number.
 * @param coins All possible coin values, unique and sorted from smallest to largest.
 *
 * @returns The change or -1 if it can't be calculated.
 */
export function getChange(total: number, coins: number[]): number[] | -1 {

    const decimals = coins.reduce(
        (max, coin) => Math.max(max, countDecimals(coin)),
        countDecimals(total),
    );

    if (decimals === 0) {
        return _getChangeInt(total, coins);
    }

    if (decimals > MAX_DECIMAL_CURRENCY) {
        throw new Error(
            `Only ${MAX_DECIMAL_CURRENCY} decimals supported. Got ${decimals}\n` +
            `total="${total}\n"` +
            `coins="${coins}"`
        );
    }

    const totalInt = total * 10 ** decimals;
    const coinsInt = coins.map(coin => coin * 10 ** decimals);

    const result = _getChangeInt(totalInt, coinsInt);

    return result === -1 ? -1 : result.map(coin => coin / (10 ** decimals));
}

/**
 * Calculate the change of a given amount with the smallest amount of coin possible.
 *
 * @param total Total amount to return. Must be a positive integer or 0
 * @param coins All possible coin values, unique and sorted from smallest to largest.
 *
 * @returns The change or -1 if it can't be calculated.
 *
 * @copyright Inspiration
 * - [GeeksforGeeks](https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/)
 * - [YouTube](https://youtu.be/jgiZlGzXMBw)
 */
export function _getChangeInt(total: number, coins: number[]): number[] | -1 {

    if (isNotInteger(total) || total < 0) {
        throw new Error(`"total" should be a positive integer. Got ${typeof total}: ${total}`);
    }

    // Stores change for every amount from 1 to total.
    const cache: (number[] | null)[] = new Array(total + 1).fill(null);

    cache[0] = [];

    // Compute change for all values from 1 to total
    for (let i = 1; i <= total; i++) {

        // Go through all coins smaller than i
        for (let j = 0; j < coins.length; j++) {

            const coin = coins[j];

            if (coin <= i) {

                const subRes = cache[i - coin];

                if (subRes === null) {
                    continue;
                }

                const candidate = [...subRes, coin];

                if (cache[i] === null || candidate.length < cache[i].length) {
                    cache[i] = candidate;
                }
            }
        }
    }

    if (cache[total] === null) {
        return -1;
    }

    return cache[total];
}


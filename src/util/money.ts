/**
 * Worst case scenario, the maximum decimal of a state currency is 3.
 *
 * @see https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf
 */
export const MAX_DECIMAL_CURRENCY = 3;

/**
 * Round a value to the maximum decimal currency.
 * Use it to safely manipulate currency values.
 */
export function parseMoney(value: number): number {
    return +value.toFixed(MAX_DECIMAL_CURRENCY);
}

export const CENTS_IN_EUR = [.01, .02, .05, .10, .20, .50];

export const COINS_IN_EUR = [...CENTS_IN_EUR, 1, 2];

export const BANKNOTES_IN_EUR = [5, 10, 20, 50, 100, 200, 500];

export const CASH_IN_EUR = [...COINS_IN_EUR, ...BANKNOTES_IN_EUR];
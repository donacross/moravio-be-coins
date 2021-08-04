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
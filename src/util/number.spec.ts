import { countDecimals } from "./number";

describe('countDecimals', () => {

    it('counts the amount of decimals in a number', () => {
        expect(countDecimals(3.14)).toBe(2);
    });

    it('handles number 0 < n < 1', () => {
        expect(countDecimals(.11)).toBe(2);
    });

    it('handles negatives', () => {
        expect(countDecimals(-12.1234)).toBe(4);
    });

    it('counts up to 17 decimals', () => {
        expect(countDecimals(0.12345678901234567)).toBe(17);
    });

    it('handles 17 significant digits only', () => {
        expect(countDecimals(1234567890.12345678)).toBe(7);
    });

    it('returns 0 for an integer', () => {
        expect(countDecimals(2)).toBe(0);
    });

    it('returns 0 for undefined', () => {
        expect(countDecimals(undefined)).toBe(0);
    });

    it('returns 0 for null', () => {
        expect(countDecimals(null)).toBe(0);
    });

    it('returns 0 for NaN', () => {
        expect(countDecimals(NaN)).toBe(0);
    });

    it('returns 0 for Infinity', () => {
        expect(countDecimals(Infinity)).toBe(0);
    });

    it('returns 0 for -0', () => {
        expect(countDecimals(-0)).toBe(0);
    });
});
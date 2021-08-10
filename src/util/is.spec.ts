import { isInteger, isNotInteger, isDecimal, isNotDecimal } from "./is";

describe('isInteger()', () => {

    it('returns true for an integer', () => {
        expect(isInteger(1)).toBe(true);
    });

    it('returns false for a decimal', () => {
        expect(isInteger(.1)).toBe(false);
    });

    it('returns false for undefined', () => {
        expect(isInteger(undefined)).toBe(false);
    });

    it('returns false for null', () => {
        expect(isInteger(null)).toBe(false);
    });

    it('returns false for NaN', () => {
        expect(isInteger(NaN)).toBe(false);
    });

    it('returns false for Infinity', () => {
        expect(isInteger(Infinity)).toBe(false);
    });
});

describe('isNotInteger()', () => {

    it('returns true for a decimal', () => {
        expect(isNotInteger(.42)).toBe(true);
    });
});

describe('isDecimal()', () => {

    it('returns true for a decimal', () => {
        expect(isDecimal(.42)).toBe(true);
    });

    it('returns false for an integer', () => {
        expect(isDecimal(666)).toBe(false);
    });

    it('returns false for undefined', () => {
        expect(isDecimal(undefined)).toBe(false);
    });

    it('returns false for null', () => {
        expect(isDecimal(null)).toBe(false);
    });

    it('returns false for NaN', () => {
        expect(isDecimal(NaN)).toBe(false);
    });

    it('returns false for Infinity', () => {
        expect(isDecimal(Infinity)).toBe(false);
    });
});

describe('isNotDecimal()', () => {

    it('returns true for an integer', () => {
        expect(isNotDecimal(3)).toBe(true);
    });
});
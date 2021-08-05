import { MAX_DECIMAL_CURRENCY, parseMoney } from "./money";

describe('MAX_DECIMAL_CURRENCY', () => {

    test('= 3', () => {
        expect(MAX_DECIMAL_CURRENCY).toBe(3);
    });
});

describe('parseMoney()', () => {

    test('Floating point issue', () => {
        expect(parseMoney(0.1 + 0.2)).toBe(0.3);
    });

    test('Trim trailing zeros', () => {
        expect(parseMoney(0.100)).toBe(0.1);
    });

    test('Round up to 3 decimal', () => {
        expect(parseMoney(0.1234)).toBe(0.123);
    });

    test('Round up and don\'t truncate', () => {
        expect(parseMoney(0.1239)).toBe(0.124);
    });

    describe('Limitations', () => {

        test('NaN', () => {
            expect(parseMoney(NaN)).toBe(NaN);
        });

        test('Infinity', () => {
            expect(parseMoney(Infinity)).toBe(Infinity);
        });

        test('Does not handle wrong intermediate calculation', () => {
            // 0.3 - (3 * 0.1) = -5.551115123125783e-17
            expect(parseMoney(0.3 - (3 * 0.1))).not.toBe(0);
            expect(parseMoney(0.3 - (3 * 0.1))).toBe(-0);
            expect(parseMoney(0.3 - parseMoney(3 * 0.1))).toBe(0);
        });
    });
});
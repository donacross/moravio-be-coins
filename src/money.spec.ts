import { MAX_DECIMAL_CURRENCY, parseMoney } from "./money";

describe('MAX_DECIMAL_CURRENCY', () => {

    test('= 3', () => {
        expect(MAX_DECIMAL_CURRENCY).toBe(3);
    });
});

describe('parseMoney()', () => {

    test('floating point issue', () => {
        expect(parseMoney(0.1 + 0.2)).toBe(0.3);
    });

    test('trim trailing zeros', () => {
        expect(parseMoney(0.100)).toBe(0.1);
    });

    test('round up to 3 decimal', () => {
        expect(parseMoney(0.1234)).toBe(0.123);
    });

    test('do not truncate', () => {
        expect(parseMoney(0.1239)).toBe(0.124);
    });

    test('NaN', () => {
        expect(parseMoney(NaN)).toBe(NaN);
    });

    test('Infinity', () => {
        expect(parseMoney(Infinity)).toBe(Infinity);
    });
});
import { getChange, _getChangeInt } from "./get-change";
import { CASH_IN_EUR } from "./util/money";

describe('getChange()', () => {

    it('Returns the least amount of coins possible', () => {
        expect(getChange(11, [1, 5, 6, 8])).toStrictEqual([6, 5]);
    });

    describe('handles decimals', () => {

        it('for total and coins', () => {
            expect(getChange(.11, [.01, .05, .06, .08])).toStrictEqual([.06, .05]);
            expect(getChange(.3, [.1, .2])).toStrictEqual([.2, .1]);
            expect(getChange(.3, [.05, .10, .25])).toStrictEqual([.25, .05]);
            expect(getChange(6.1, [.1, 5.5])).toStrictEqual([5.5, .1, .1, .1, .1, .1, .1]);
            expect(getChange(999.99, CASH_IN_EUR)).toStrictEqual([500, 200, 200, 50, 20, 20, 5, 2, 2, .5, .2, .2, .05, .02, .02]);
        });

        it('for coins only', () => {
            expect(getChange(1, [.5, 6])).toStrictEqual([.5, .5]);
            expect(getChange(4, [.1, .5, .8, 1, 2, 5])).toStrictEqual([2, 2]);
        });

        it('rejects decimals smaller than the max decimal currency', () => {
            expect(() => getChange(.0003, [1])).toThrow();
            expect(() => getChange(1, [.0001])).toThrow();
            expect(() => getChange(.0003, [1, .0002])).toThrow();
            expect(() => getChange(.0003, [.0001, .0002])).toThrow();
        });
    });
});

describe('_getChangeInt()', () => {

    it('returns the least amount of coins possible', () => {
        expect(_getChangeInt(12, [1, 2, 5])).toStrictEqual([5, 5, 2]);
        expect(_getChangeInt(6, [1, 3, 4])).toStrictEqual([3, 3]);
        expect(_getChangeInt(11, [1, 5, 6, 8])).toStrictEqual([6, 5]);
        expect(_getChangeInt(12, [1, 4, 5])).toStrictEqual([4, 4, 4]);
        expect(_getChangeInt(6, [3, 4])).toStrictEqual([3, 3]);
        expect(_getChangeInt(12, [4, 5])).toStrictEqual([4, 4, 4]);
        expect(_getChangeInt(30, [5, 10, 25])).toStrictEqual([25, 5]);
    });

    it('returns [] if the total is 0', () => {
        expect(_getChangeInt(0, [1, 2, 3])).toStrictEqual([]);
        expect(_getChangeInt(0, [])).toStrictEqual([]);
        expect(_getChangeInt(-0, [])).toStrictEqual([]);
    });

    it('returns -1 if the change can\'t be calculated', () => {
        expect(_getChangeInt(1, [2])).toBe(-1);
        expect(_getChangeInt(1, [])).toBe(-1);
    });

    it('fails at handling decimals', () => {
        expect(() => _getChangeInt(.11, [.1, .5, .6, .8])).toThrow();
    });

    it('throws an error if the total is invalid', () => {
        expect(() => _getChangeInt(null, [1])).toThrow();
        expect(() => _getChangeInt(undefined, [1])).toThrow();
        expect(() => _getChangeInt(Infinity, [1])).toThrow();
        expect(() => _getChangeInt(NaN, [1])).toThrow();
        expect(() => _getChangeInt(-1, [1])).toThrow();
    });

    it('handles a coin of value 0', () => {
        expect(() => _getChangeInt(12, [0, 1, 2, 3])).not.toThrow();
        expect(_getChangeInt(0, [0])).toStrictEqual([]);
        expect(_getChangeInt(12, [0])).toStrictEqual(-1);
    });

    test('fails at handling duplicate and unsorted coins', () => {
        expect(_getChangeInt(13, [5, 2, 1, 5, 2, 5, 1])).not.toStrictEqual([5, 5, 2, 1]);
    });
});



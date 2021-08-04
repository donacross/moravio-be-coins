import { getChange } from "./get-change";


describe('getChange()', () => {

    test('demo case', () => {
        expect(getChange(12, [1, 2, 5])).toStrictEqual([5, 5, 2]);
    });

    test('duplicate and unsorted coins', () => {
        expect(getChange(12, [5, 2, 1, 5, 2, 5, 1])).toStrictEqual([5, 5, 2]);
    });

    test('throw an error when coins value does not allow to calculate the change', () => {
        expect(() => getChange(12, [5])).toThrow('Unable to get change.');
    });

    test('decimal coins', () => {
        expect(getChange(6.1, [.1, 5.5])).toStrictEqual([5.5, .1, .1, .1, .1, .1, .1]);
        expect(getChange(.003, [.001, .002])).toStrictEqual([.002, .001]);
    });

    test('can\'t handle more than 3 decimals', () => {
        expect(getChange(.0003, [.0001, .0002])).not.toStrictEqual([.0002, .0001]);
    });

    test('stress case in euro', () => {
        const euros = [.01, .02, .05, .1, .2, .5, 1, 2, 5, 10, 20, 50, 100, 200];
        expect(getChange(199.57, euros)).toStrictEqual([100, 50, 20, 20, 5, 2, 2, .5, .05, .02]);
    });

    test('negative amount returns a positive change', () => {
        expect(getChange(-12, [1, 2, 5])).toStrictEqual([5, 5, 2]);
    });

    test('handles 0 as a coin', () => {
        expect(getChange(0, [0])).toStrictEqual([]);
        expect(() => getChange(12, [0])).toThrow();
    });
});
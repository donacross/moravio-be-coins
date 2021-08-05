import { getChange, getChangeOrThrow } from "./get-change";

describe('getChange()', () => {

    test('Demo case', () => {
        expect(getChange(12, [1, 2, 5])).toStrictEqual({
            success: true,
            change: [5, 5, 2],
            left: 0,
        });
    });

    test('Handles duplicate and unsorted coins', () => {
        expect(getChange(12, [5, 2, 1, 5, 2, 5, 1])).toStrictEqual({
            success: true,
            change: [5, 5, 2],
            left: 0,
        });
    });

    test('Doesn\'t throw an error in case the change couldn\'t be calculated.', () => {
        expect(() => getChange(12, [5])).not.toThrow();
    });

    describe('Handles decimal coins', () => {

        test('1 decimal', () => {
            expect(getChange(6.1, [.1, 5.5])).toStrictEqual({
                success: true,
                change: [5.5, .1, .1, .1, .1, .1, .1],
                left: 0,
            });
        });

        test('3 decimals', () => {
            expect(getChange(.003, [.001, .002])).toStrictEqual({
                success: true,
                change: [.002, .001],
                left: 0,
            });
        });

        test('Can\'t handle more than 3 decimals', () => {
            expect(getChange(.0003, [.0001, .0002])).not.toStrictEqual({
                success: true,
                change: [.0002, .0001],
                left: 0,
            });
        });
    });

    test('Stress case in euro', () => {
        const euros = [.01, .02, .05, .1, .2, .5, 1, 2, 5, 10, 20, 50, 100, 200];
        expect(getChange(199.57, euros)).toStrictEqual({
            success: true,
            change: [100, 50, 20, 20, 5, 2, 2, .5, .05, .02],
            left: 0,
        });
    });

    test('Negative amount returns a positive change', () => {
        expect(getChange(-12, [1, 2, 5])).toStrictEqual({
            success: true,
            change: [5, 5, 2],
            left: 0,
        });
    });

    describe('Handles a coin of value 0', () => {

        test('Doesn\'t throw', () => {
            expect(() => getChange(12, [0])).not.toThrow();
        });

        test('Success in case the total is 0', () => {
            expect(getChange(0, [0])).toStrictEqual({
                success: true,
                change: [],
                left: 0,
            });
        });

        test('Failure in case the total is not 0', () => {
            expect(getChange(12, [0])).toStrictEqual({
                success: false,
                change: [],
                left: 12,
            });
        });
    });
});

describe('getChangeOrThrow()', () => {

    test('Returns directly the change', () => {
        expect(getChangeOrThrow(12, [1, 2, 5])).toStrictEqual([5, 5, 2]);
    });

    test('Throws when unable to calculate the change', () => {
        expect(() => getChangeOrThrow(12, [5])).toThrow('Unable to get change.');
    });

    // I would have liked to test that getChangeOrThrow() calls getChange().
    //
    // But it appears to be quite "complicated" to test that a function calls another function
    // within the same module.
    //
    // https://stackoverflow.com/questions/45111198/how-to-mock-functions-in-the-same-module-using-jest
    // https://github.com/facebook/jest/issues/936#issuecomment-545080082
    //
    // I don't want to over-complicate the exercise so I'll skip this test.

});
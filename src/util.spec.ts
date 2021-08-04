import { sortAscending, sortAscendingUnique, sortDescending, sortDescendingUnique, unique } from "./util";

describe('unique()', () => {

    test('simple case', () => {
        expect(unique([2, 2, 4, 1, 2])).toStrictEqual([2, 4, 1]);
    });

    test('empty', () => {
        expect(unique([])).toStrictEqual([]);
    });

    test('immutable', () => {
        const param = [2, 2, 4, 1, 2];
        const paramNotMutated = param.slice();
        unique(param);
        expect(param).toStrictEqual(paramNotMutated);
        expect(param).not.toBe(paramNotMutated);
    });
});

describe('sortAscending()', () => {

    test('simple case', () => {
        expect(sortAscending([3, 1, 2])).toStrictEqual([1, 2, 3]);
    });

    test('empty', () => {
        expect(sortAscending([])).toStrictEqual([]);
    });

    test('immutable', () => {
        const param = [3, 1, 2];
        const paramNotMutated = param.slice();
        sortAscending(param);
        expect(param).toStrictEqual(paramNotMutated);
        expect(param).not.toBe(paramNotMutated);
    });
});

describe('sortDescending()', () => {

    test('simple case', () => {
        expect(sortDescending([2, 1, 3])).toStrictEqual([3, 2, 1]);
    });

    test('empty', () => {
        expect(sortDescending([])).toStrictEqual([]);
    });

    test('immutable', () => {
        const param = [3, 1, 2];
        const paramNotMutated = param.slice();
        sortDescending(param);
        expect(param).toStrictEqual(paramNotMutated);
        expect(param).not.toBe(paramNotMutated);
    });
});

describe('sortAscendingUnique()', () => {

    test('simple case', () => {
        expect(sortAscendingUnique([2, 1, 3, 2, 1])).toStrictEqual([1, 2, 3]);
    });

    test('empty', () => {
        expect(sortAscendingUnique([])).toStrictEqual([]);
    });

    test('immutable', () => {
        const param = [3, 1, 2];
        const paramNotMutated = param.slice();
        sortAscendingUnique(param);
        expect(param).toStrictEqual(paramNotMutated);
        expect(param).not.toBe(paramNotMutated);
    });
});

describe('sortDescendingUnique()', () => {

    test('simple case', () => {
        expect(sortDescendingUnique([2, 1, 3, 2, 1])).toStrictEqual([3, 2, 1]);
    });

    test('empty', () => {
        expect(sortDescendingUnique([])).toStrictEqual([]);
    });

    test('immutable', () => {
        const param = [3, 1, 2];
        const paramNotMutated = param.slice();
        sortDescendingUnique(param);
        expect(param).toStrictEqual(paramNotMutated);
        expect(param).not.toBe(paramNotMutated);
    });
});
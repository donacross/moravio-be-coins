import { logVertical } from "./array";

describe('logVertical()', () => {

    const consoleLog = jest.spyOn(console, 'log');

    beforeEach(() => consoleLog.mockClear())

    test('Logs array on multiple lines', () => {
        logVertical(['a', 'b']);
        expect(consoleLog).toHaveBeenCalledWith(`0  a\n1  b`);
    });

    test('Logs only once', () => {
        logVertical(['a', 'b']);
        expect(consoleLog).toHaveBeenCalledTimes(1);
    });
});
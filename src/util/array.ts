/**
 * Log each array value on one line with its index.
 * Indexes are aligned to the right.
 *
 * ```ts
 * const array = ['a', 'b'];
 *
 * console.log(array); // a,b
 *
 * logVertical(array); // 0  a
 *                     // 1  b
 * ```
 */
export function logVertical(array: any[]): void {
    const pad: string = new Array(Math.ceil(array.length / 10)).fill(' ').join('');
    const lines: string[] = array.map((value, i) => `${(pad + i).slice(-pad.length)}  ${value}`);
    console.log(lines.join('\n'));
}
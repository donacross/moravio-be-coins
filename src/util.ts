/**
 * Removes duplicates from an array.
 */
export function unique(array: number[]): number[] {
    return [...new Set(array)];
}

/**
 * Sort an array of number from smallest to biggest.
 */
export function sortAscending(array: number[]): number[] {
    return array.slice().sort((n1, n2) => n1 - n2);
}

/**
 * Sort an array of number from biggest to smallest.
 */
export function sortDescending(array: number[]): number[] {
    return array.slice().sort((n1, n2) => n2 - n1);
}

/**
 * Sort an array of number from smallest to biggest and remove duplicates.
 */
export function sortAscendingUnique(array: number[]): number[] {
    return [...new Set(array)].sort((n1, n2) => n1 - n2);
}

/**
 * Sort an array of number from biggest to smallest and remove duplicates.
 */
export function sortDescendingUnique(array: number[]): number[] {
    return [...new Set(array)].sort((n1, n2) => n2 - n1);
}
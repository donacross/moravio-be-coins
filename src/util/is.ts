export function isInteger(n: number): boolean {
    return Number.isInteger(n);
}

export function isNotInteger(n: number): boolean {
    return !isInteger(n);
}

export function isDecimal(n: number): boolean {
    return Number.isFinite(n) && n % 1 !== 0;
}

export function isNotDecimal(n: number): boolean {
    return !isDecimal(n);
}
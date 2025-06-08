// Unshiftを実装
export type Unshift<T extends any[], S> = [S, ...T]

export type Result = Unshift<[1, 2], 0>; // [0, 1, 2]
export type Result2 = Unshift<Result, "3">; // ["3", 0, 1, 2]

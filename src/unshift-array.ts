// Unshiftを実装
type Unshift<T extends any[], S> = [S, ...T]

type Result = Unshift<[1, 2], 0>; // [0, 1, 2]
type Result2 = Unshift<Result, "3">; // ["3", 0, 1, 2]

// Push型を定義
// 例えば、Push<[1, 2], '3'>は[1, 2, '3']を返す
type Push<T extends any[], U> = [...T, U];


type Result = Push<[1, 2], "3">; // [1, 2, '3']
type Result2 = Push<[1, 2, "3"], "3">; // [1, 2, "3", "3"]
type Result3 = Push<Result, Result2>; // [1, 2, "3", [1, 2, "3", "3"]]

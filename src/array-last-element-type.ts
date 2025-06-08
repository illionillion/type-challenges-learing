// Last型を実装してください。
// Last型は、配列の最後の要素の型を返す型です。
// export type Last<T> = T extends [...infer _, infer U] ? U : never;
export type Last<T extends any[]> = T extends [...infer _, infer U] ? U : never;

export type arr1 = ["a", "b", "c"];
export type arr2 = [3, 2, 1];

export type tail1 = Last<arr1>; // expected to be 'c'
export type tail2 = Last<arr2>; // expected to be 1

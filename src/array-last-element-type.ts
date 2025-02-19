// Last型を実装してください。
// Last型は、配列の最後の要素の型を返す型です。
// type Last<T> = T extends [...infer _, infer U] ? U : never;
type Last<T extends any[]> = T extends [...infer _, infer U] ? U : never;

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1

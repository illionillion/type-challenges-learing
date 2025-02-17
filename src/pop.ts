// Pop型を実装してください。
// Pop型は、配列の最後の要素を削除した配列を返す型です。
// type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : never;
type Pop<T> = T extends [...infer U, infer _] ? U : never;

type arr1 = ["a", "b", "c", "d"];
type arr2 = [3, 2, 1];

type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2>; // expected to be [3, 2]

// Pop型を実装してください。
// Pop型は、配列の最後の要素を削除した配列を返す型です。
// any[]で配列の型か確かめるのが正しい
export type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : never;
// export type Pop<T> = T extends [...infer U, infer _] ? U : never;

export type arr1 = ["a", "b", "c", "d"];
export type arr2 = [3, 2, 1];

export type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
export type re2 = Pop<arr2>; // expected to be [3, 2]

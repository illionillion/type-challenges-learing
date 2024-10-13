type If<T extends boolean, A, B> = T extends true ? A : B;

// type Ifを実装してください。
type A = If<true, "a", "b">; // expected to be 'a'
type B = If<false, "a", "b">; // expected to be 'b'
// A extends A で A === Aらしい
type C = If<"hoge" extends "hoge" ? true: false, "a", "b">; // expected to be 'a'

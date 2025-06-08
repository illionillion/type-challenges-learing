export type If<T extends boolean, A, B> = T extends true ? A : B;

// export type Ifを実装してください。
export type A = If<true, "a", "b">; // expected to be 'a'
export type B = If<false, "a", "b">; // expected to be 'b'
// A extends A で A === Aらしい
export type C = If<"hoge" extends "hoge" ? true: false, "a", "b">; // expected to be 'a'

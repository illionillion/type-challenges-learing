// Merge型を実装してください。
// Merge型は、2つのオブジェクト型を受け取り、それらをマージした型を返す型です。
export type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never;
};

export type foo = {
  name: string;
  age: string;
};
export type coo = {
  age: number;
  sex: string;
  phoneNumber: number
};

export type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}

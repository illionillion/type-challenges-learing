// 文字列から両端の空白を削除した新しい文字列を返すTrim<T>を実装してください。
export type Trim<S extends string> = S extends `${" "}${infer R}` | `${infer R}${" "}`
  ? Trim<R>
  : S;

export type trimed = Trim<"  Hello World  ">; // expected to be 'Hello World'

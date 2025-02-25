// 文字列から両端の空白を削除した新しい文字列を返すTrim<T>を実装してください。
type Trim<S extends string> = S extends `${" "}${infer R}` | `${infer R}${" "}`
  ? Trim<R>
  : S;

type trimed = Trim<"  Hello World  ">; // expected to be 'Hello World'

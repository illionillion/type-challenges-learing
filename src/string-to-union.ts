// 文字列をUnion型に変換するStringToUnion<T>を実装してください。
export type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : never;

export type Test = "123";
export type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"

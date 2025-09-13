// 文字列を配列に変換して長さを取得
type LengthOfString<S extends string> = StrToArray<S>['length'];

// より効率的な実装：文字の代わりに1を使ってカウント
type StrToArray<S> = S extends `${infer _}${infer xs}`
  ? [1, ...StrToArray<xs>]
  : [];

export type Test = "123";
export type Result = LengthOfString<Test>; // expected to be 3

// 参考：最後の文字を取得する型（こちらは別の問題用）
type LastChar<S extends string> = 
  S extends `${infer First}${infer Rest}`
    ? Rest extends ""
      ? First  // Restが空文字列なら、Firstが最後の文字
      : LastChar<Rest>  // そうでなければ再帰的にRestを処理
    : never;

export type TestLast = LastChar<"123">; // "3"

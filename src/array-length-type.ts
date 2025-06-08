// 配列の長さを返すLength<T>を実装

export type tesla = ["tesla", "model 3", "model X", "model Y"];
export type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

// Tがany[]と同じ
export type Length<T extends readonly any[]> = T["length"];

export type teslaLength = Length<tesla>; // expected 4
export type spaceXLength = Length<spaceX>; // expected 5

const array = ["hoge", "fuga", "piyo"] as const;
// as constで readonly ["hoge", "fuga", "piyo"]の型にする
// as constつけないとnumber[]型になる

export type arrayLength = Length<typeof array>; // 3

// 文字列から総数を吸い出すには一度タプルにする必要がある
// 再帰的にタプル型を作り、長さを計算
export type StringToTuple<
  T extends string,
  A extends any[] = []
> = T extends `${infer First}${infer Rest}`
  ? StringToTuple<Rest, [First, ...A]>
  : A;

export type StringLength<T extends string> = StringToTuple<T>["length"];

export type HogeLength = StringLength<"hoge">; // 4
export type EmptyLength = StringLength<"">; // 0
export type LongLength = StringLength<"typescript">; // 10

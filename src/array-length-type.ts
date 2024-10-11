// 配列の長さを返すLength<T>を実装

type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

// Tがany[]と同じ
type Length<T extends readonly any[]> = T["length"]

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

const array = [
    "hoge",
    "fuga",
    "piyo",
] as const 
// as constで readonly ["hoge", "fuga", "piyo"]の型にする
// as constつけないとnumber[]型になる

type arrayLength = Length<typeof array> // 3
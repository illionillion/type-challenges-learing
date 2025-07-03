// "しかのこのこのここしたんたん"で終わればOK、それ以外だったらエラーの型
export type Loop<T extends string> = T extends `${infer _Start}しかのこのこのここしたんたん`
  ? T
  : never;

// 使用例
export type ValidLoop = Loop<"これはしかのこのこのここしたんたん">; // 有効な型
export type InvalidLoop = Loop<"これはしかのこのこのここしたんたんではない">; // 無効な型、エラーになる

// 2連続
export type ValidLoop2 = Loop<"これはしかのこのこのここしたんたんしかのこのこのここしたんたん">; // 有効な型
export type InvalidLoop2 = Loop<"これはしかのこのこのここしたんたんしかのこのこのここしたんたんではない">; // 無効な型、エラーになる
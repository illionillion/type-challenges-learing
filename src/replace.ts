// Replace型を実装してください。
// Replace型は、文字列型Sのうち、文字列型Tにマッチする部分を文字列型Uに置換した型を返します。
type Replace<
  S extends string,
  T extends string,
  U extends string
> = T extends "" ? S : S extends `${infer A}${T}${infer B}` ? `${A}${U}${B}` : S;

type replaced = Replace<"types are fun!", "fun", "awesome">; // 'types are awesome!'
type replaced2 = Replace<"hello world", "world", "TypeScript">; // 'hello TypeScript'
type replaced3 = Replace<"foo bar foo", "foo", "baz">; // 'baz bar foo'（最初の "foo" のみ置換）
type replaced4 = Replace<"abc", "", "X">; // 'abc'（空文字列は置換しない）
type replaced5 = Replace<"abcd", "d", "">; // 'abc'

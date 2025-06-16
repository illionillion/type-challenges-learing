// KebabCase<T>を実装してください
type KebabCase<S extends string> = S extends `${infer Head}${infer Tail}`
  ? `${Lowercase<Head>}${Tail extends Uncapitalize<Tail> ? '' : '-'}${KebabCase<Tail>}`
  : S;

type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";

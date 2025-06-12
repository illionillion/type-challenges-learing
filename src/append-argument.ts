export type AppendArgument<Fn, A> =
  Fn extends (...args: infer Args) => infer R
    ? (...args: [...Args, A]) => R
    : never;

export type Fn = (a: number, b: string) => number;

export type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number

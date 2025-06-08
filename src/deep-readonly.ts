// この型を実装してください
export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

export type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

export type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: "hi";
  };
  readonly y: "hey";
};

export type Todo = DeepReadonly<X>; // should be same as `Expected`

// MyReturnTypeを実装してください。
// MyReturnTypeは、関数の戻り値の型を返す型です。
// export type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;
export type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

export type a = MyReturnType<typeof fn>; // should be "1 | 2"

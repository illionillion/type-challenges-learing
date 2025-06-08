// TupleToUnionを実装してください
export type TupleToUnion<T extends any[]> = T[number];
// export type TupleToUnion<T extends any[]> =
//   T extends [infer First, ...infer Rest] ? First | TupleToUnion<Rest> : never;

export type Arr = ["1", "2", "3"];

export type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

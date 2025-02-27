// Flattenを実装してください。
type Flatten<S extends any[], T extends any[] = []> = S extends [
  infer First,
  ...infer Rest
]
  ? First extends any[]
    ? Flatten<[...First, ...Rest], T>
    : Flatten<[...Rest], [...T, First]>
  : T;
type flatten = Flatten<[1, 2, [3, 4], [[5]]]>; // [1, 2, 3, 4, 5]

// Permutation型を定義してください
type Permutation<T, U = T> = 
  [T] extends [never]
    ? []
    : T extends U
      ? [T, ...Permutation<Exclude<U, T>>]
      : [];

type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

export const result: perm = ["A", "B", "C"]; // これは正しい
export const result2: perm = ["B", "A", "C"]; // これも正しい

type perm2 = Permutation<1 | 2 | 3>;
export const result3: perm2 = [1, 2, 3]; // これは正しい
export const result4: perm2 = [2, 1, 3]; // これも正しい
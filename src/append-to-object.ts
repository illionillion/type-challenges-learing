// type AppendToObject<T extends object, K extends string, V> = {
//   [P in keyof T | K]: P extends keyof T ? T[P] : V;
// };

type AppendToObject<T extends object, K extends string, V> = Omit<T, K> & { [P in K]: V };
type Test = { id: "1" };
export type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
export type Result2 = AppendToObject<Result, "value", 5>; // expected to be { id: '1', value: 5 }にならない

// const result: Result2 = {
//     id: "1",
//     value: 5
// };
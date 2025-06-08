// MyOmit型を定義してください
// MyOmitは、第二引数で指定したキーを除外した型を返す型です
export type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

export interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

export type TodoPreview = MyOmit<Todo, "description" | "title">;
// export type TodoPreview = Omit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};

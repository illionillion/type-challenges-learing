// MyOmit型を定義してください
// MyOmitは、第二引数で指定したキーを除外した型を返す型です
type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, "description" | "title">;
// type TodoPreview = Omit<Todo, "description" | "title">;

const todo: TodoPreview = {
  completed: false,
};

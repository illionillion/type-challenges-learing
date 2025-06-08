export interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

export type MyPick<T, K extends keyof T> = { // KはTのキー
  // マッピング型、K の中にある各プロパティ P に対して処理を行う
  [P in K]: T[P];
};

export type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

export type TodoPreview2 = MyPick<Todo, "title" | "description">;

const todo2: TodoPreview2 = {
  title: "Clean room",
  description: "clean",
};

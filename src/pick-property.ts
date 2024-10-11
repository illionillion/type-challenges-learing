interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = { // KはTのキー
  // マッピング型、K の中にある各プロパティ P に対して処理を行う
  [P in K]: T[P];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

type TodoPreview2 = MyPick<Todo, "title" | "description">;

const todo2: TodoPreview2 = {
  title: "Clean room",
  description: "clean",
};

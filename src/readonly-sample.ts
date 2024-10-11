interface Todo {
    title: string;
    description: string;
}

type ExchangeReadonly<T> = {
    readonly [P in keyof T]: T[P];
}

const todo: Todo = {
    title: "",
    description: ""
};

console.log(todo);

const todoReadonly: ExchangeReadonly<Todo> = {
    title: "",
    description: ""
};

// readonly プロパティに対して値を代入しようとするとエラーになる
// todoReadonly.title = "hoge"; // ここでエラー: Cannot assign to 'title' because it is a read-only property.

console.log(todoReadonly);
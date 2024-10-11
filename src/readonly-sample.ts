interface Todo {
    title: string;
    description: string;
}

type ExchangeReadonly<T> = {
    readonly [P in keyof T]: T[P]
}

const todo: Todo = {
    title: "",
    description: ""
}
todo.title = "hoge"
console.dir(todo)

const todoReadonly: ExchangeReadonly<Todo> = {
    title: "",
    description: ""
}
console.dir(todoReadonly)
// todoReadonly.title = "hoge"
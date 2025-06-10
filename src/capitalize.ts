type MyCapitalize<S extends string> = 
S extends `${infer First}${infer Tail}` ?
    `${Uppercase<First>}${Tail}` : S;
type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'

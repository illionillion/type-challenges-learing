export interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

export interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

export type LookUp<T, U> = T extends { type: U } ? T : never;

export type MyDog = LookUp<Cat | Dog, "dog">; // expected to be `Dog`
export type MyCat = LookUp<Cat | Dog, "cat">; // expected to be `Cat`
export type MyNever = LookUp<Cat | Dog, "cataa">; // expected to be `never`

let dog: MyDog = {
    type: "dog",
    breeds: "Boxer",
    color: "brown"
}

// never型じゃないから再代入できる
dog = {
    breeds: "Bulldog",
    color: "white",
    type: "dog"
}
interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type LookUp<T, U> = T extends { type: U } ? T : never;

type MyDog = LookUp<Cat | Dog, "dog">; // expected to be `Dog`
type MyCat = LookUp<Cat | Dog, "cat">; // expected to be `Cat`
type MyNever = LookUp<Cat | Dog, "cataa">; // expected to be `never`

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
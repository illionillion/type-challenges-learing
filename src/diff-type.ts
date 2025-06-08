export type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>;

export type Foo = {
  name: string;
  age: string;
};
export type Bar = {
  name: string;
  age: string;
  gender: number;
};
export type Coo = {
  name: string;
  gender: number;
};

export type DiffFooBar = Diff<Foo, Bar>; // { gender: number }
export type DiffBarFoo = Diff<Bar, Foo>; // { gender: number }
export type DiffFooCoo = Diff<Foo, Coo>; // { gender: number, age: string }
export type DiffCooFoo = Diff<Coo, Foo>; // { gender: number, age: string }

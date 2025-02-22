type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>;

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};
type Coo = {
  name: string;
  gender: number;
};

type DiffFooBar = Diff<Foo, Bar>; // { gender: number }
type DiffBarFoo = Diff<Bar, Foo>; // { gender: number }
type DiffFooCoo = Diff<Foo, Coo>; // { gender: number, age: string }
type DiffCooFoo = Diff<Coo, Foo>; // { gender: number, age: string }

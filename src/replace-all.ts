type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Head}${From}${infer Tail}`
  ? `${Head}${To}${ReplaceAll<Tail, From, To>}`
  : S;

type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'

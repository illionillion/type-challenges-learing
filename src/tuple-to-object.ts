// Tuple型からObject型を生成するTupleToObjectを実装

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

export type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  // T[number]にあるやつをKとする
  [K in T[number]]: K;
};

export type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

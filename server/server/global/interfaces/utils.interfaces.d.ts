import { AppState } from "./app.interfaces";

type CheckMissing<T extends readonly any[], U extends Record<string, any>> = {
  [K in keyof U]: K extends T[number] ? never : K;
}[keyof U] extends never
  ? T
  : T & "Error: missing keys";

type T1 = CheckMissing<["p1"], { p1: any; p2: any }>; //["p1"] & "Error: missing keys"
type T2 = CheckMissing<["p1", "p2"], { p1: any; p2: any }>; // ["p1", "p2"]

type CheckDuplicate<T extends readonly any[]> = {
  [P1 in keyof T]: "_flag_" extends {
    [P2 in keyof T]: P2 extends P1
      ? never
      : T[P2] extends T[P1]
      ? "_flag_"
      : never;
  }[keyof T]
    ? [T[P1], "Error: duplicate"]
    : T[P1];
};

type T3 = CheckDuplicate<[1, 2, 3]>; // [1, 2, 3]
type T4 = CheckDuplicate<[1, 2, 1]>;
// [[1, "Error: duplicate"], 2, [1, "Error: duplicate"]]

export function createKeys<
  T extends readonly (keyof AppState)[] | [keyof AppState]
>(t: T & CheckMissing<T, AppState> & CheckDuplicate<T>): T {
  return t;
}

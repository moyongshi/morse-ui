/* typescript魔法 */

/**
 * 按照一定的规则，将字符串进行拆分
 * @example
 * const path = a.b.c;
 * type PathType = SplitPath<path> // -> type PathType= 'a' | 'b' | 'c'
 */
type SplitPath<T extends string> = T extends `${infer A}.${infer B}` ? A | SplitPath<B> : T

/**
 * 将Promise类型的返回值解构出来
 * @example
 * type a = UnpackPromise<Promise<number>> // type a = number
 */
type UnpackPromise<T extends Promise<any>> = T extends Promise<infer A> ? A : never

type SampleType = {
  name: string
  age: number
  sex: '男' | '女'
}

type ToFunc = {
  [k in keyof SampleType as `get${k}`]: (args: SampleType[k]) => void
}

interface Stu {
  name: string;
  nest: {
    a: {
      b: number;
    };
    tt: {
      c: boolean;
    };
  };
  info: {
    score: number;
    grade: string;
  };
}


type DeepKeyOf<T> = T extends Record<string, any> ? { [k in keyof T]: k extends string ? k | `${k}.${DeepKeyOf<T[k]>}` : never; }[keyof T] : never

export type { SplitPath, UnpackPromise, DeepKeyOf }

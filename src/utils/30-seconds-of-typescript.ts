/**
 * 依次累计
 *
 * @example
 * accumulate（[1，2，3，4，5]) -> [1,3,6,10,15]
 *
 * @param {number} nums
 * @returns {number[]}
 */
const accumulate = (...nums: number[]): number[] => nums.reduce((pre: number[], cur) => [...pre, cur + +pre.slice(-1)], [])

/**
 * 根据指定宽度截断数组
 * @param {number} n 截断的数组宽度
 * @param {number[]} arr
 * @returns {number[][]}
 */
const aperture = (n: number, arr: number[]) =>
  n > arr.length ? arr : // 宽度不够，直接返回[]
    arr.slice(n - 1)// 从第一段的终点索引开始取值
      .map((v, i) => [...arr.slice(i, i + n - 1), v]) // 取值从开始到终点前一个值+当前的遍历值

/**
 * 验证数据中有一个值为true
 * @param {T[]} arr
 * @param {(t: T) => boolean} fn
 * @returns {boolean}
 */
const any = <T = any>(arr: T[], fn: (t: T) => boolean = Boolean) => arr.some(fn)

const and = <T = any, U = any>(t: T, u: U) => Boolean(t) && Boolean(u)

/**
 * 包装函数
 * @example
 * const firstTwoMax = ary(Math.max, 2);
 * [[2, 6, 12], [6, 4, 8], [10]].map((x) => firstTwoMax(...x)); // [6, 6, 10]
 * @param {(...args: T[]) => T} fn
 * @param {number} n
 * @return {(...args: T[]) => T}
 */
const ary = <T = any>(fn: (...args: T[]) => T, n: number) => (...args: T[]) => fn(...args.slice(0, n))

/**
 * 根据过滤函数将数值分为两组
 * @param {T[]} arr
 * @param {(arg: T) => boolean} filter
 * @return {T}
 */
const bifurcate = <T = any>(arr: T[], filter: (arg: T) => boolean) =>
  arr.reduce((pre, cur,) => {
    pre[filter(cur) ? 0 : 1].push(cur)
    return pre
  }, [[] as T[], [] as T[]])

export { accumulate, aperture, and, any, ary, bifurcate };

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

export { and, any, ary, bifurcate };

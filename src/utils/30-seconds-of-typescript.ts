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

export { accumulate }

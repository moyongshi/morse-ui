const rates: {[key: string]: string} = {
  us: '6.5',
  eu: '7.5',
};

const manageReducers = function () {
  return function (state: {[key: string]: number}, item: {price: number}) {
    return Object.keys(rates).reduce((nextState, key) => {
      state[`${key}Total`] += item.price * Number(rates[key]);
      return state;
    }, {});
  };
};

//region any
/**
 * 验证数据中有一个值为true
 * @param {T[]} arr
 * @param {(t: T) => boolean} fn
 * @returns {boolean}
 */
const any = <T = any>(arr: T[], fn: (t: T) => boolean = Boolean) => arr.some(fn)

const arr = [1, 2, 3, 4, 0]

any(arr, (t) => Boolean(t))
//endregion

const and = <T = any, U = any>(t: T, u: U) => Boolean(t) && Boolean(u)

and(true, true)

export { manageReducers };

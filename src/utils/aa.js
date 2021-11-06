var prices = [{ price: 23 }, { price: 45 }, { price: 56 }];
var rates = {
  us: '6.5',
  eu: '7.5',
};
var initialState = { usTotal: 0, euTotal: 0 };

var res = prices.reduce(
  (accumulator, cur1) =>
    Object.keys(rates).reduce((prev2, cur2) => {
      console.log(accumulator, cur1, prev2, cur2);
      accumulator[`${cur2}Total`] += cur1.price * rates[cur2];
      return accumulator;
    }, {}),
  initialState
);

var manageReducers = function () {
  return function (state, item) {
    return Object.keys(rates).reduce((nextState, key) => {
      state[`${key}Total`] += item.price * rates[key];
      return state;
    }, {});
  };
};
var res1 = prices.reduce(manageReducers(), initialState);

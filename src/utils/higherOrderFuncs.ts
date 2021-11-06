const prices: { price: number }[] = [{ price: 23 }, { price: 45 }, { price: 56 }];
const rates: { [key: string]: string } = {
  us: '6.5',
  eu: '7.5',
};
const initialState = { usTotal: 0, euTotal: 0 };

const manageReducers = function () {
  return function (state: { [key: string]: number }, item: { price: number }) {
    return Object.keys(rates).reduce((nextState, key) => {
      state[`${key}Total`] += item.price * rates[key];
      return state;
    }, {});
  };
};

export { manageReducers };

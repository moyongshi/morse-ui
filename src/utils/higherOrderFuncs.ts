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

export { manageReducers };

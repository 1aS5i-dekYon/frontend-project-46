// import _ from 'lodash';

// const makeSortKeys = (obj1, obj2) => _.sortBy([...Object.keys(obj1), ...Object.keys(obj2)]);
// return _.sortBy(_.uniqWith(keys, _.isEqual));

// const getUniqElColl = (coll) => _.uniqWith(coll, _.isEqual);

const makeDiffList = (coll) => {
  const result = coll.map((el) => {
    const [[, symbol], [key, value]] = Object.entries(el);
    return [`${symbol} ${key}: ${value}`];
  })
  return `{\n  ${result.join('\n  ')}\n}`;
}

const makeKeyWzSymbol = (symb, key, value) => {
  return {symbol: symb, [key]: value};
};

export { makeDiffList, makeKeyWzSymbol };
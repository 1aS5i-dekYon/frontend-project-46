import _ from 'lodash';
import fs from 'fs';
import path from 'path';

const getDataJsonFile = (filepath) => {
//   const objects = filepaths
//     .map((filepath) => path.resolve(filepath))
//     .filter((filepath) => fs.existsSync(filepath))
//     .filter((filepath) => fs.lstatSync(filepath))
//     .filter((filepath) => path.extname(filepath).toLowerCase() === '.json')
//     .map((filepath) => fs.readFileSync(filepath))
//     .map((filepath) => JSON.parse(filepath));
   return JSON.parse(fs.readFileSync(path.resolve(filepath)));
};

const makeSortKeys = (obj1, obj2) => _.sortBy([...Object.keys(obj1), ...Object.keys(obj2)]);

// return _.sortBy(_.uniqWith(keys, _.isEqual));

const getUniqElColl = (coll) => _.uniqWith(coll, _.isEqual);

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

export { getDataJsonFile, makeSortKeys, getUniqElColl, makeDiffList, makeKeyWzSymbol };
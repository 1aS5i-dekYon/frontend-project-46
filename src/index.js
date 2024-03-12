import _ from 'lodash';
import { makeKeyWzSymbol, makeDiffList } from './utils.js';
import { getDataFilepath } from './parsers.js';

const genDiff = (filepath1, filepath2) => {
    const obj1 = getDataFilepath(filepath1);
    const obj2 = getDataFilepath(filepath2);
    
    const keys = _.sortBy([...Object.keys(obj1), ...Object.keys(obj2)]);
    
    const coll = keys.reduce((acc, key) => {
        const symbols = { plus: '+', minus: '-', space: ' '};
        let el;
        if (!Object.hasOwn(obj2, key)) {
            el = makeKeyWzSymbol(symbols.minus, key, obj1[key]);
        } else if (!Object.hasOwn(obj1, key)) {
            el = makeKeyWzSymbol(symbols.plus, key, obj2[key]);
        } else if  (obj1[key] === obj2[key]) {
            el = makeKeyWzSymbol(symbols.space, key, obj1[key]);
        } else if (_.find(acc, (o) => Object.hasOwn(o, key))) {
            el = makeKeyWzSymbol(symbols.plus, key, obj2[key]);
        } else if (Object.hasOwn(obj1, key)) {
            el = makeKeyWzSymbol(symbols.minus, key, obj1[key]);
        } else {
            throw new Error('genDiff error, plz help mi');
        }
        return [...acc, el];
    }, []);
    const uniqColl = _.uniqWith(coll, _.isEqual);
    return makeDiffList(uniqColl);
};

export { genDiff };
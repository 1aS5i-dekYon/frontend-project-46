import _ from 'lodash';
import * as v from './utils.js';

const genDiff = (filepath1, filepath2) => {
    const obj1 = v.getDataJsonFile(filepath1)
    const obj2 = v.getDataJsonFile(filepath2);
    
    const keys = v.makeSortKeys(obj1, obj2);
    
    const coll = keys.reduce((acc, key) => {
        const symbols = { plus: '+', minus: '-', space: ' '};
        let el;
        if (!Object.hasOwn(obj2, key)) {
            el = v.makeKeyWzSymbol(symbols.minus, key, obj1[key]);
        } else if (!Object.hasOwn(obj1, key)) {
            el = v.makeKeyWzSymbol(symbols.plus, key, obj2[key]);
        } else if  (obj1[key] === obj2[key]) {
            el = v.makeKeyWzSymbol(symbols.space, key, obj1[key]);
        } else if (_.find(acc, (o) => Object.hasOwn(o, key))) {
            el = v.makeKeyWzSymbol(symbols.plus, key, obj2[key]);
        } else if (Object.hasOwn(obj1, key)) {
            el = v.makeKeyWzSymbol(symbols.minus, key, obj1[key]);
        } else {
            throw new Error('genDiff error, plz help mi');
        }
        return [...acc, el];
    }, []);
    const uniqColl = v.getUniqElColl(coll);
    const list = v.makeDiffList(uniqColl);
    console.log(list);
    return list;
};

export { genDiff };
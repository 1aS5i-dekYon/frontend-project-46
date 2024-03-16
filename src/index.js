// import _ from 'lodash';
import { getDataFilepath } from './parsers.js';
import { getDiffTree } from './diff-tree.js';
import { makeStylishFormat } from './stylish.js';

const genDiff = (filepath1, filepath2, typeFormat = 'stylish') => {
    const obj1 = getDataFilepath(filepath1);
    const obj2 = getDataFilepath(filepath2);
    
    const diffTree = getDiffTree(obj1, obj2);
    
    const format = {
        'stylish': makeStylishFormat
    };
    return format[typeFormat](diffTree);
};

export { genDiff };
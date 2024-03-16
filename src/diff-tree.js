import _ from 'lodash';

const makeChildrenTree = (obj1, obj2) => {
    const keys = _.sortBy(_.uniq([...Object.keys(obj1), ...Object.keys(obj2)]));
    
    const coll = keys.map((key) => {
        if (!Object.hasOwn(obj2, key)) {
            return { type: 'add path1', key, value: obj1[key] };
        }
        if (!Object.hasOwn(obj1, key)) {
            return { type: 'add path2', key, value: obj2[key] };
        }
        const val1 = obj1[key];
        const val2 = obj2[key];
        if (_.isPlainObject(val1) && _.isPlainObject(val2)) {
            return { type: 'nested', key, children: makeChildrenTree(val1, val2) };
        } else if (!_.isEqual(val1, val2)) {
            return { type: 'different', key, val1, val2 };
        } else {
            return { type: 'same', key, value: val1 };
        }
    });
    return coll;
};

const getDiffTree = (file1, file2) => {
    const result = { type: 'root', children: makeChildrenTree(file1, file2) };
    return result;
  };

export { getDiffTree };
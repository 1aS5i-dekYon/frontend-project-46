import _ from 'lodash';

const getValue = (value) => {
    if (_.isObject(value)) {
        return '[complex value]';
    }
    if (_.isString(value)) {
        return `'${value}'`;
    }
    return value;
};

const makePlainFormat = (el, parentName = '') => {
    switch (el.type) {
    case 'root': {
        const tree = el.children
            .filter((child) => child.type !== 'same')
            .flatMap((child) => makePlainFormat(child, el.key))
            .filter((child) => child !== '');
        if (tree.length === 0) {
            return '';
        }
        return tree.join('\n');
    }
    case 'deleted': {
        return `Property '${parentName}${el.key}' was removed`;
    }
    case 'added': {
        return `Property '${parentName}${el.key}' was added with value: ${getValue(el.value)}`;
    }
    case 'nested': {
        const output = el.children
            .filter((child) => child.type !== 'same')
            .flatMap((child) => makePlainFormat(child, `${parentName}${el.key}.`));
        if (output === '') {
            return '';
        }
        return output.join('\n');
    }
    case 'different': {
        return `Property '${parentName}${el.key}' was updated. From ${getValue(el.val1)} to ${getValue(el.val2)}`;
    }
    default: {
        throw new Error('i broke down, brah :/');
    }
    }
};

export { makePlainFormat };
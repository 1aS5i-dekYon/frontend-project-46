import _ from 'lodash';

const getValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  } else if (_.isString(value)) {
    return `'${value}'`;
  } else {
    return value;
  }
}

const makePlainFormat = (el, parentName = '') => {
    switch (el.type) {
      case 'root': {
        const tree = el.children.flatMap((child) => makePlainFormat(child, el.key));
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
import _ from "lodash";

const indent = (depth, oneIndent = 4) => ' '.repeat(depth * oneIndent - 2);

const stringify = (el, depth, makeStylishFormat) => {
  if (!_.isObject(el)) {
    return el;
  }
  const bush = Object.entries(el)
  .map(([key, value]) => makeStylishFormat({ type: 'same', key, value }, depth + 1));
  return `{\n${bush.join('\n')}\n${indent(depth)}  }`;
}

const makeStylishFormat = (el, depth = 0) => {
    switch (el.type) {
      case 'root': {
        const tree = el.children.flatMap((child) => makeStylishFormat(child, depth + 1));
        return `{\n${tree.join('\n')}\n}`;
      }
      case 'add path1': {
        return `${indent(depth)}- ${el.key}: ${stringify(el.value, depth, makeStylishFormat)}`;
      }
      case 'add path2': {
        return `${indent(depth)}+ ${el.key}: ${stringify(el.value, depth, makeStylishFormat)}`;
      }
      case 'nested': {
        const output = el.children.flatMap((child) => makeStylishFormat(child, depth + 1));
        return `${indent(depth)}  ${el.key}: {\n${output.join('\n')}\n${indent(depth)}  }`;
      }
      case 'same': {
        return `${indent(depth)}  ${el.key}: ${stringify(el.value, depth, makeStylishFormat)}`;
      }
      case 'different': {
        return `${indent(depth)}- ${el.key}: ${stringify(el.val1, depth, makeStylishFormat)}\n${indent(depth)}+ ${el.key}: ${stringify(el.val2, depth, makeStylishFormat)}`;
      }
      default: {
        return ' ';
      }
    }
  };

export { makeStylishFormat };
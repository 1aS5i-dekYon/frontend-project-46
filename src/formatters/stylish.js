import _ from "lodash";
import { indent, makeStylishNode } from '../utils.js';

const stringify = (el, depth, makeStylishFormat) => {
    if (!_.isObject(el)) {
        return el;
    }
    const bush = Object.entries(el)
        .map(([key, value]) => makeStylishFormat({ type: 'same', key, value }, depth + 1));
    return `{\n${bush.join('\n')}\n${indent(depth)}  }`;
};

const makeStylishFormat = (el, depth = 0) => {
    switch (el.type) {
    case 'root': {
        const tree = el.children.flatMap((child) => makeStylishFormat(child, depth + 1));
        return `{\n${tree.join('\n')}\n}`;
    }
    case 'deleted': {
        const value = stringify(el.value, depth, makeStylishFormat);
        return makeStylishNode(indent(depth), '-', el.key, value);
    }
    case 'added': {
        const value = stringify(el.value, depth, makeStylishFormat);
        return makeStylishNode(indent(depth), '+', el.key, value);
    }
    case 'nested': {
        const output = el.children.flatMap((child) => makeStylishFormat(child, depth + 1));
        const valueWzIndent = `{\n${output.join('\n')}\n${indent(depth)}  }`;
        return makeStylishNode(indent(depth), ' ', el.key, valueWzIndent);
    }
    case 'same': {
        const value = stringify(el.value, depth, makeStylishFormat);
        return makeStylishNode(indent(depth), ' ', el.key, value);
    }
    case 'different': {
        const value1 = stringify(el.val1, depth, makeStylishFormat);
        const text1 = makeStylishNode(indent(depth), '-', el.key, value1);

        const value2 = stringify(el.val2, depth, makeStylishFormat);
        const text2 = makeStylishNode(indent(depth), '+', el.key, value2);
        return `${text1}\n${text2}`;
    }
    default: {
        console.log(`${el.type} plain`);
        throw new Error('i broke down, brah :/');
    }
    }
};

export { makeStylishFormat };
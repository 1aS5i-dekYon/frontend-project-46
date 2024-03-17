import { makeStylishFormat } from './stylish.js';
import { makePlainFormat } from './plain.js';

const getFormatData = (tree, typeFormat) => {
    const format = {
        'stylish': makeStylishFormat,
        'plain': makePlainFormat
    };
    return format[typeFormat](tree);
}

export { getFormatData };
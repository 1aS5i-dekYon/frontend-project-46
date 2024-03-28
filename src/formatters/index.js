import { makeStylishFormat } from './stylish.js';
import { makePlainFormat } from './plain.js';
import { makeJSONFormat } from './json.js';

const getFormatData = (tree, typeFormat) => {
  const format = {
    'stylish': makeStylishFormat,
    'plain': makePlainFormat,
    'json': makeJSONFormat
  };
  return format[typeFormat](tree);
};

export { getFormatData };
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const parsers = {
  '.json': JSON.parse,
  '.yml': yaml.load,
  '.yaml': yaml.load
};

const getDataFilepath = (filepath) => {
//   const objects = filepaths
//     .map((filepath) => path.resolve(filepath))
//     .filter((filepath) => fs.existsSync(filepath))
//     .filter((filepath) => fs.lstatSync(filepath))
//     .filter((filepath) => path.extname(filepath).toLowerCase() === '.json')
//     .map((filepath) => fs.readFileSync(filepath))
//     .map((filepath) => JSON.parse(filepath));
  const fileExtension = path.extname(filepath);
  return parsers[fileExtension](fs.readFileSync(filepath));
};

export { getDataFilepath };

#!/usr/bin/env node

import { genDiff } from '../src/index.js';
// import { cwd } from 'node:process';
import { Command } from 'commander';
const gendiff = new Command();

gendiff
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    // console.log(`Current directory: ${cwd()}`);
    const result = genDiff(filepath1, filepath2);
    console.log(result);
  });
  

gendiff.parse();

export { gendiff };
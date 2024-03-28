#!/usr/bin/env node

import { cwd } from 'node:process';
import path from 'path';
import { Command } from 'commander';
import genDiff from '../src/main.js';

const gendiff = new Command();

gendiff
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const absolutePath1 = path.resolve(cwd(), filepath1);
    const absolutePath2 = path.resolve(cwd(), filepath2);
    const result = genDiff(absolutePath1, absolutePath2, options.format);
    console.log(result);
  });

gendiff.parse();

export default gendiff;

import { test, expect } from '@jest/globals';
import { genDiff } from '../src/index.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('test1: gendiff file1.json file2.json', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    const result = genDiff(filepath1, filepath2);
    expect(result).toEqual(`{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}`);
})

test('test2: gendiff empty-file.json file2.json', () => {
    const filepath1 = getFixturePath('empty-file.json');
    const filepath2 = getFixturePath('file2.json');
    const result = genDiff(filepath1, filepath2);
    expect(result).toEqual(`{\n  + host: hexlet.io\n  + timeout: 20\n  + verbose: true\n}`);
})

test('test3: gendiff empty-file.json empty-file.json', () => {
    const filepath = getFixturePath('empty-file.json');
    const result = genDiff(filepath, filepath);
    expect(result).toEqual(`{\n  \n}`);
})

test('test4: gendiff file1.json file1.json', () => {
    const filepath = getFixturePath('file1.json');
    const result = genDiff(filepath, filepath);
    expect(result).toEqual(`{\n    follow: false\n    host: hexlet.io\n    proxy: 123.234.53.22\n    timeout: 50\n}`);
})

test('test5: gendiff file1.yml file2.yml', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');
    const result = genDiff(filepath1, filepath2);
    expect(result).toEqual(`{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}`);
})

test('test6: gendiff empty-file.yml file2.yml', () => {
    const filepath1 = getFixturePath('empty-file.yml');
    const filepath2 = getFixturePath('file2.yml');
    const result = genDiff(filepath1, filepath2);
    expect(result).toEqual(`{\n  + host: hexlet.io\n  + timeout: 20\n  + verbose: true\n}`);
})
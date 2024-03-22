// const makeDiffList = (coll) => {
//     const result = coll.map((el) => {
//         const [[, symbol], [key, value]] = Object.entries(el);
//         return [`${symbol} ${key}: ${value}`];
//     });
//     return `{\n  ${result.join('\n  ')}\n}`;
// };

// const makeKeyWzSymbol = (symb, key, value) => {
//     return {symbol: symb, [key]: value};
// };

// export { makeDiffList, makeKeyWzSymbol };
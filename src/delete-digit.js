const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  const arr2 = [];
  arr
    .forEach( (e, i) => {
      arr2.push(
        Number.parseInt(
        arr
        .slice(0, i)
        .concat(arr.slice(i + 1, arr.length))
        .join('')
     ));
  })
  const result = arr2.sort((a, b) =>  b - a);
  return result[0];
}

module.exports = {
  deleteDigit
};

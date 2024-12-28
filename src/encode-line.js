const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return str;
  }
  const arr = str.split('');
  let resultStr = '';
  let count = 1;
  arr.reduce((accumulator, currentValue, i) => {
    if (currentValue === accumulator) {
      count += 1;
        if (i === arr.length - 1) {
       resultStr += count + currentValue
       return currentValue;
     }
      return currentValue;
    } else if (currentValue !== accumulator) {
        if (count === 1) {
          resultStr += accumulator;
        } else {
          resultStr += count + accumulator;
        }
        count = 1;
        if (i === arr.length - 1) {
       resultStr += currentValue
       return currentValue;
     }
      return currentValue;
    }
    }
  )
  return resultStr;
  }

module.exports = {
  encodeLine
};

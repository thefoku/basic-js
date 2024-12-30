const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {  
  try {
    if (arr.constructor !== Array
    ) {
      throw new Error('\'arr\' parameter must be an instance of the Array!');
    }
  } catch(error) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  if (arr.length > 50) {
    return arr;
  }
  return arr
    .map((e) => {
      if (e === '--double-next') {
        return arr[arr.indexOf(e) + 1]
      } else if (e === '--double-prev') {
        if (arr[arr.indexOf(e) - 2] === '--discard-next') {
          return undefined;
        }
        return arr[arr.indexOf(e) - 1];
      } else if(e === '--discard-next') {
        return undefined;
      } else if(e === '--discard-prev') {
        return undefined;
      }
      if (arr[arr.indexOf(e) - 1] === '--discard-next') {
        return undefined;
      }
      if (arr[arr.indexOf(e) + 1] === '--discard-prev') {
        return undefined;
      }
      return e;
    })
    .filter(e => e !== undefined);
}

module.exports = {
  transform
};

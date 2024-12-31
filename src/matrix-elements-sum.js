const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const result = [];
      
  matrix.forEach((first) => {
   return first.forEach((elem) => {
      if(matrix[matrix.indexOf(first) - 1]) {
        if (matrix[matrix.indexOf(first) - 1][first.indexOf(elem)] === 0) {
          return;
        }
      }
     result.push(elem);
     return;
    }); 
  })
  return result.reduce((accum, curr) => {
    return accum + curr;
  });
}

module.exports = {
  getMatrixElementsSum
};

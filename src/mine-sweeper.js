const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  console.log(matrix)
  return matrix.map((first, indFrst) => {
    const topRow = matrix[indFrst - 1];
    const botRow = matrix[indFrst + 1];
    return first.map((elem, indElem) => {
      const prevElem = first[indElem - 1];
      const nextElem = first[indElem + 1];
      if (elem === true) {
        return 1;
      }
      if((
         (topRow && topRow[indElem] === true) || // верхний
         (botRow && botRow[indElem] === true)) && // нижний и
         (prevElem === true || nextElem === true) // лево или право
        ) {
        return 2;
      }
      if (
       (prevElem === true || nextElem === true) ||
       ((topRow && topRow[indElem - 1] === true) ||
        (topRow && topRow[indElem + 1] === true) ||
         (botRow && botRow[indElem  - 1] === true) ||
       (botRow && botRow[indElem + 1] === true)) ||
        (topRow && topRow[indElem] === true) ||
         (botRow && botRow[indElem] === true)
         ) {
        return 1;
      }
      return 0;
    })
  })
}
module.exports = {
  minesweeper
};

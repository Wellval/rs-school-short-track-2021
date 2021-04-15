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
  const result = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; ++i){
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j]) {
        for (let z = i - 1; z <= i + 1; ++z) {
          for (let y = j - 1; y <= j + 1; ++y){
            if (z >= 0 && y >= 0 && !(z === i && y === j) && z < matrix.length && y < matrix[i].length) {
              result[z][y]++;
            }
          }
        }
      }
    }
  }
  return result;
}

module.exports = minesweeper;

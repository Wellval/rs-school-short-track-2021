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
  let max = 0;
  const numLength = n.toString().split('').length;
  for (let i = 0; i < numLength; i++) {
    const arr = n.toString().split('');
    arr.splice(i, 1);
    const number = +(arr.join(''));
    if (number > max) {
      max = number;
    }
  }
  return max;
}

module.exports = deleteDigit;

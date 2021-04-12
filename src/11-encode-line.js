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
  const arr = str.split('');
  let counter = 1;
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] === arr[i + 1]) {
      counter++;
      i++;
    }
    if (counter === 1) {
      output.push(arr[i]);
    } else output.push(counter + arr[i]);
    counter = 1;
  }
  return output.join('');
}

module.exports = encodeLine;

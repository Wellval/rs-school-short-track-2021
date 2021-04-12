/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const a1 = s1.split('');
  const a2 = s2.split('');
  for (let i = 0; i <= a1.length - 1; i++) {
    for (let j = 0; j <= a2.length - 1; j++) {
      if (a1[i] === a2[j]) {
        counter += 1;
        a2.splice(j, 1);
        break;
      }
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;

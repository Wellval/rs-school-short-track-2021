/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  for (let j = 0; j < domains.length; j++) {
    const splitted = domains[j].split('.').reverse();
    for (let i = 0; i < splitted.length; ++i) {
      const name = '.'.concat(splitted.slice(0, i + 1).join('.'));
      if (!res[name]) {
        res[name] = 1;
      } else {
        res[name]++;
      }
    }
  }
  return res;
}

module.exports = getDNSStats;

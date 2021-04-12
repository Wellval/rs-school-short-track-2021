/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('');
  const index = arr.lastIndexOf('@');
  arr = arr.splice(index + 1);
  return arr.join('');
}

module.exports = getEmailDomain;

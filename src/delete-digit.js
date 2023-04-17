const { NotImplementedError } = require('../extensions/index.js');

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
  let number = n.toString();
  let array = [];
  for (let i = 0; i < number.length; i++) {
    let firstNum = number.slice(0, i);
    let secNum = number.slice(i + 1, number.length);
    array.push(firstNum + secNum);
  }
  return Math.max(...array)
}

module.exports = {
  deleteDigit
};

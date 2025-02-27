const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
    let meaning = 0;
    let allMeanings = matrix.join(",");
    let eachMeaning = allMeanings.split(",");
    for (let i = 0; i < eachMeaning.length; i++) {
      if (eachMeaning[i] === "^^") {
        meaning++;
      }
    }
    return meaning;
  }
  
module.exports = {
  countCats
};

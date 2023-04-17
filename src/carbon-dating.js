const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
let k = 0.693 / HALF_LIFE_PERIOD;

function dateSample(sampleActivity) {
  if(
   typeof sampleActivity === 'string' &&
   parseFloat(sampleActivity) < 15 &&
   parseFloat(sampleActivity) > 0
  ) {
    let x =  
      Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))
    let t = Math.ceil(
      x / k
    );
    return t
  } else {
    return false
  }
}

module.exports = {
  dateSample
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let depth = 1;
      for (let element of arr) { 
        if (Array.isArray(element)) { 
            const currentDepth = this.calculateDepth(element) + 1; 
            depth = Math.max(depth, currentDepth); 
        } 
      } 
      return depth; 
    }
  return false;
  }
}

const depthCalc = new DepthCalculator();

module.exports = {
  DepthCalculator
};

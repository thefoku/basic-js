const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  if(!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if(!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (typeof str !== 'string') {
    str += '';
  }
  if (typeof options.addition !== 'string') {
    if (options.addition || options.addition === null) {
      options.addition += '';
    }
  }

  const result = [];
  const arrAdditional = []
  arrAdditional.length = options.additionRepeatTimes;  
  const arr = str.split('ё').map((e) => e += arrAdditional
          .fill(options.addition, 0)
          .join(options.additionSeparator));
  result.length = options.repeatTimes;
  result.fill(arr, 0);
  return result.join(options.separator);
}

module.exports = {
  repeater
};

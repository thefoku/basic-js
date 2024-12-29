const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  try {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  const dateMethods = [
    "getTime", "getFullYear", "getMonth", "getDate", "getDay", "getHours", "getMinutes", "getSeconds", "getMilliseconds", "toString"
  ];

  for (const method of dateMethods) {
    if (typeof date[method] !== "function") {
        throw new Error("Invalid date!");
    }
  }
 
  if (
    Object.getPrototypeOf(date) !== Date.prototype ||
    typeof date.toString() !== 'string' ||
    typeof date === 'symbol' ||
    typeof date === 'string' ||
    typeof date === 'number' ||
    Object.getPrototypeOf(date) === '[Object: null prototype]' ||
    Object.getPrototypeOf(date) === '[object Object]' ||
    Number.isInteger(date) ||
    Object.prototype.toString.call(date) === '[object Symbol]' ||                              
    Object.prototype.toString.call(date) !== "[object Date]" || 
    date.constructor !== Date ||            
    typeof date.getTime !== "function" ||      
    typeof date.getMonth !== "function" || 
    typeof date.getDate !== "function" ||  
    isNaN(date.getTime()) ||
    isNaN(new Date(date))  ||
    isNaN(date)                     
  ) {
      throw new Error("Invalid date!");
    }
  } catch(error) {
    throw new Error('Invalid date!');
  }
  const month = date.getMonth();
  const months = [
    'winter',
    'spring',
    'summer',
    'fall',
  ]
  if (month <= 1 && month >= 0 || month === 11) {
    return months[0];
  } else if (month >= 2 && month <= 4) {
    return months[1];
  }
  else if (month >= 5 && month <= 7) {
    return months[2];
  }
  else if (month >= 8 && month <= 10 ){
    return months[3];
  }
}

module.exports = {
  getSeason
};

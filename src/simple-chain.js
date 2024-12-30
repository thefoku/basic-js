const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * chainMaker.addLink(1).addLink(2).addLink(3).finishChain() => '( 1 )~~( 2 )~~( 3 )'
 *
 * chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain() => '( 2 )~~( 3 )'
 *
 * chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain() => '( 2 )~~( 1 )~~( 3 )'
 */
let arr = [];
const chainMaker = {
  getLength() {
    return arr.length;
  },
  addLink(value) {
    arr.push(value + '');
    return this;
  },
  removeLink(position) {
    try {
      if (typeof position !== 'number' ||
        !arr[position - 1]
      ) {
        arr = [];
        throw new Error('You can\'t remove incorrect link!');
      }
    } catch(error) {
      arr = [];
      throw error;
    };
    arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    arr.reverse();
    return this;
  },
  finishChain() {
    const result = '( ' + arr.join(' )~~( ') + ' )';
    arr = [];
    return result;
  }
};

module.exports = {
  chainMaker
};

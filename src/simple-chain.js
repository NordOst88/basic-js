const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (position <= 0 || position > this.getLength() || typeof (position) !== 'number') {
      this.chain = [];
      throw new Error();    
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    };
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = '';
    this.chain.forEach((el, i) => {
      if (i < this.getLength() -1) {
        result += `( ${el} )~~`;
      } else {
        result += `( ${el} )`;
      };
    });
    this.chain = [];
    return result;
  },

};

module.exports = chainMaker;

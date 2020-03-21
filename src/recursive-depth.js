module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr.some(el => Array.isArray(el))) {
            return this.calculateDepth(arr.flat(1)) + 1;
        } else {
            return 1;
        };
    }
};
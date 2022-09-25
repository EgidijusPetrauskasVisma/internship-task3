function sum(array) {
    return array.flat(Infinity).reduce((a, b) => a + b, 0);
}

module.exports = sum;
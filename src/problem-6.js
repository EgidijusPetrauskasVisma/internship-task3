function firstFunction(x) {
    return function secondFunction(y) {
        return x + y;
    }
}

const answer = firstFunction(5);

module.exports = firstFunction;
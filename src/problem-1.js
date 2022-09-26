function range(x, y) {
    const answer = [];
    for (let i = x; i !== y; i++) {
        answer.push(i);
    }
    return answer;
};

const rangeES6 = (x, y) => {
    return Array.from({ length: y }, (_, index) => index).filter(value => value >= x);
};

module.exports = {
    range,
    rangeES6
};
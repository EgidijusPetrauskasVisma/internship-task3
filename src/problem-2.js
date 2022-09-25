function sum(list) {
    let answer = 0;
    for (let i = 0; i < list.length; i++) {
        answer = answer + list[i];
    }
    return answer;
};

const sumES6 = (list) => {
    return list.reduce((a, b) => a + b)
};

module.exports = {
    sum,
    sumES6
};
const functions = require('../problem-2');

test('Return sum of list', () => {
    expect(functions.sum([2, 4, 5])).toBe(11)
});

test('Return sum of list', () => {
    expect(functions.sumES6([2, 4, 5, 2])).toBe(13)
});
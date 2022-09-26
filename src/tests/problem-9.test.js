const sum = require('../problem-9');

test('Return the sum of array', () => {
    expect(sum([2, 5, [2], [4, 5, [2, 1]]])).toBe(21)
});
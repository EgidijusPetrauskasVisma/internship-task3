const functions = require('../problem-1');

test('Return array from x to y', () => {
    expect(functions.range(2, 5)).toEqual([2, 3, 4])
});

test('Return array from x to y', () => {
    expect(functions.rangeES6(2, 5)).toEqual([2, 3, 4])
});
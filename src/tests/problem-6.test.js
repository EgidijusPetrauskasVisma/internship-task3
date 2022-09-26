const firstFunction = require('../problem-6');

test('Function witch is return from a function returns a sum of values', () => {
    expect(firstFunction(5)(20)).toBe(25)
});
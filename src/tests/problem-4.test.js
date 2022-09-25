const onlyUniques = require('../problem-4')

test('Return array only with unique values', () => {
    expect(onlyUniques([2, 4, 5, 5, 'Tas', 'T', 'T'])).toEqual([2, 4, 5, 'Tas', 'T'])
});
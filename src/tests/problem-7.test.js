const sevenAte9 = require('../problem-7');

test('Returns number with 9s in between 7s removed', () => {
    expect(sevenAte9('79765477979')).toBe('776547779');
});
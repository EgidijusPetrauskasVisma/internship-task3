const say = require('../problem-11');

test('Add to words to one', () => {
    expect(say('Hello,')('its me.')).toBe('Hello, its me.')
});
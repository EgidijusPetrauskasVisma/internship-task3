const wordSearch = require('../problem-5');

test('Checks if a word is in text', () => {
    expect(wordSearch('IndUstrY')).toBe(true);
});

test('Checks if a word is in text', () => {
    expect(wordSearch('nebezinau')).toBe(false);
});
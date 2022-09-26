const wordSearch = require('../problem-5');

describe("Check if a word is in paragraph", () => {
    test('Word is in paragraph', () => {
        expect(wordSearch('IndUstrY')).toBe(true);
    });

    test('Word is NOT in paragraph', () => {
        expect(wordSearch('nebezinau')).toBe(false);
    });
})
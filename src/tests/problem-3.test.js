const functions = require('../problem-3');

test('Return motto based on GOT house name', () => {
    expect(functions.got('Stark')).toBe("Winter is Coming")
});


describe('Return a motto based on GOT house name', () => {
    test("Should return Tully house motto", () => {
        expect(functions.gotES6('Tully')).toBe("Family, Duty, Honor")
    });

    test('Should find no house', () => {
        expect(functions.gotES6('Lothbrook')).toBe('No house with this name')
    })
})

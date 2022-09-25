const functions = require('../problem-3');

test('Return a motto based on GOT house name', () => {
    expect(functions.GOT('Stark')).toBe("Winter is Coming")
});

test('Return a motto based on GOT house name', () => {
    expect(functions.GOTES6('Tully')).toBe("Family, Duty, Honor")
});
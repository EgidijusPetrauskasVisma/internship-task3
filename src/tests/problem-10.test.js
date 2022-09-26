const calculators = require('../problem-10');

describe('Calculator', () => {
    const calc = new calculators.Calculator(0);

    const result = calc.add(4).subtract(1).multiply(3).divide(3);
    const expected = { value: 3 };

    test('Use all methods of calculator to ge amount', () => {
        expect(result).toEqual(expected);
    })
})

describe('CalculatorES6', () => {
    test('Use all methods of calculator to ge amount', () => {
        const calc = new calculators.CalculatorES6(0);

        const result = calc.add(4).subtract(1).multiply(3).divide(2);
        const expected = { value: 4.5 };

        expect(result).toEqual(expected);
    })
})
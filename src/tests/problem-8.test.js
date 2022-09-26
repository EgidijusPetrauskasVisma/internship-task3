const spy = require('../problem-8');

const add = (a, b) => {
    return a + b
}

test('Should return how many times spied function is called', () => {
    const spied = spy(add);
    spied(2, 2)
    spied(2, 3)
    spied(1, 1)

    expect(spied.report()).toEqual({ totalCalls: 3 })
    expect(spied(1, 1)).toEqual(2)
    expect(spied.report()).toEqual({ totalCalls: 4 })
})
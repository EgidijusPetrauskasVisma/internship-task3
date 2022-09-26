function Calculator(value) {
    this.value = value;
    Calculator.prototype.add = function (num) {
        this.value += num;
        return this;
    }
    Calculator.prototype.subtract = function (num) {
        this.value -= num;
        return this;
    }
    Calculator.prototype.multiply = function (num) {
        this.value *= num;
        return this;
    }
    Calculator.prototype.divide = function (num) {
        this.value /= num;
        return this;
    }
}

class CalculatorES6 {
    constructor(value) {
        this.value = value
    }
    add(num) {
        this.value += num;
        return this;
    }
    subtract(num) {
        this.value -= num;
        return this;
    }
    multiply(num) {
        this.value *= num;
        return this;
    }
    divide(num) {
        this.value /= num;
        return this;
    }
}

module.exports = {
    Calculator,
    CalculatorES6
}
function say(firstPart) {
    return function (secondPart) {
        return `${firstPart} ${secondPart}`
    }
}

module.exports = say;
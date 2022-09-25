function sevenAte9(value) {
    const stringValue = String(value);
    if (!stringValue.includes('797')) return stringValue;

    const array = stringValue.split('');
    const removableIndexes = [];
    array.forEach((num, i) => {
        if (num == '9') {
            if (array[i - 1] === '7' && array[i + 1] === '7') {
                return removableIndexes.push(i);
            }
        }
    })

    return array.filter((x, i) => !removableIndexes.includes((i))).join('');
}

module.exports = sevenAte9;
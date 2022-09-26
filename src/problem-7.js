function sevenAte9(value) {
    let stringValue = String(value);
    while (stringValue.includes('797')) {
        stringValue = stringValue.replaceAll('797', '77');
    }
    return stringValue;
}

module.exports = sevenAte9;
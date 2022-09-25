function onlyUniques(array) {
    return [... new Set(array)]
};

module.exports = onlyUniques;
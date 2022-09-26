function spy(myFn) {
    let counter = 0;

    const wrappedFn = (...args) => {
        counter++;
        return myFn(...args);
    }

    wrappedFn.report = () => {
        return {
            totalCalls: counter
        }
    }

    return wrappedFn;
}

module.exports = spy;
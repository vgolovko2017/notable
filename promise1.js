let asyncSym = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number'
            && typeof b === 'number') {
                resolve(a + b);
            }
            else {
                reject('Arguments must be number');
            }
        }, 1000);
    });
};

asyncSym(7, 3)
    .then((result) => {
        console.log(result);
    })
    .catch((errorMsg) => {
        console.log(errorMsg);
    });

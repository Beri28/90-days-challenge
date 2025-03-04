type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    return promise1.then((value1) => {
        return promise2.then((value2) => {
            return value1 + value2;
        });
    }).then((result) => {
        console.log(`The sum of two number is:${result.toString()}`);
        return result//new Promise(resolve=> setTimeout(()=>resolve(result),20)) //this commented line works too
    })
};
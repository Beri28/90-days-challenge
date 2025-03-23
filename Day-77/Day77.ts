type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
    
    return async function(...args) {
        const promise = [
         new Promise(resolve => resolve(fn(...args))), // Promise that resolves with the result of executing fn(...args)
         new Promise((resolve, reject) => setTimeout(() => reject('Time Limit Exceeded'), t)) //Promise that rejects with 'Time Limit Exceeded' after t milliseconds
        ] 
     // Return a new promise that resolves or rejects as soon as one of the promises in the array settles
        return Promise.race(promise);
     }
};
type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    let res:any[]=[]
    let counter:number=0
    return new Promise((resolve,reject)=>{
        for(let i=0;i<functions.length;i++){
            functions[i]().then((resl)=>{
                console.log("Resolve for each",resl)
                // res.push(resl)
                res[i]=resl
                counter++
                if(counter===functions.length) resolve(res)
            }).catch((rej)=>{
                reject(rej)
            }) 
        }
    })
};

const promise = promiseAll([
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
])
promise.then(console.log); // [4,10,16]
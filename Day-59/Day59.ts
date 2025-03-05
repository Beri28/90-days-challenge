type Fn1 = (...params: number[]) => number

function memoize(fn: Fn1,memo={}): Fn1 {
    return function(...args) {
        let key=JSON.stringify(args)
        if(key in memo){
            return memo[key]
        }
        let x=fn(...args)
        memo[key]=x
        return x
    }
}

async function sleep(millis: number): Promise<void> {
    return await new Promise<void>((resolve, reject) => {
        setTimeout(resolve,millis)
    })
}
// sleep(1000)

function camelcase(s: string): number {
    // Write your code here
    if(s.length===0) return 0
    if(s.length===1) return 1
    let count=1
    s.split('').forEach((l)=>{
        if(l===l.toLocaleUpperCase()) count++
    })
    console.log(count)
    return count

    // I think below code is better optimized to handle strings of vast lengths, but i haven't tested yet, above code passed all test cases
    // let count=1
    // let uC='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // if(s.length>27){
    //     uC.split('').forEach((l)=>{
    //         if(s.includes(l)) count++
    //     })
    //     return count
    // }else{
    //     s.split('').forEach((l)=>{
    //         if(l===l.toLocaleUpperCase()) count++
    //     })
    //     console.log(count)
    //     return count
    // }
}

camelcase('oneTwoThree')
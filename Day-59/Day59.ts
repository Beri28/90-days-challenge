type Fn = (...params: number[]) => number

function memoize(fn: Fn,memo={}): Fn {
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
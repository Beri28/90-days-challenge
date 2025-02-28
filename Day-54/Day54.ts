type Fn0 = (n: number, i: number) => any

function filter(arr: number[], fn: Fn0): number[] {
    let filteredArr:number[]=[]
    arr.forEach((el,index)=>{
        if(fn(el,index)) filteredArr.push(el)
    })
    return filteredArr
};

type Fn2 = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn2, init: number): number {
    if(nums.length===0) return init
    nums.forEach(num=>{
        init=fn(init,num)
    })
    return init
};

type F = (x: number) => number;

// function compose(functions: F[]): F {
    
//     return function(x) {
//         return (0)=>{ return 0}
//     }
// };

// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.
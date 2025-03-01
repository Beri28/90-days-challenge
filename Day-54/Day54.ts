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


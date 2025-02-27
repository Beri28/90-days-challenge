function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const newArray: number[] = []
    arr.forEach((el,index)=>{
            newArray.push(fn(el,index))
    })
    return newArray
};
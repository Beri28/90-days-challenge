const countingSort=(arr:number[]):number[]=>{
    let indexArray:number[]=[]
    for(let i=0;i<100;i++){
        indexArray.push(0)
    }
    for(let i=0;i<arr.length;i++){
        indexArray[arr[i]]++
    }
    console.log(indexArray)
    return indexArray
}
countingSort([1,1,3,2,1])
countingSort([1,1,3,2,1])
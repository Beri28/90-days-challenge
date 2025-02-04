function divisibleSumPairs (arr:number[],k:number):number{
    let sumPairs:number=0
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(i<j && (arr[i]+arr[j])%k===0){
               sumPairs++
            } 
        }
    }
    console.log(sumPairs)
    return sumPairs
}

divisibleSumPairs([1,2,3,4,5,6],5)
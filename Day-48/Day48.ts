function pickingNumbers(a: number[]): number {
    // Write your code here
    a.sort((a,b)=>a-b)
    let count=0
    for(let i=0;i<a.length-1;i++){
        let tempCount=0
        for(let j=i;j<a.length;j++,j!=i){
            if(Math.abs(a[i]-a[j])<=1){
                tempCount++
            }
        }
        if(count<tempCount)count=tempCount
    }
    console.log(count)
    return count===1?0:count
}
pickingNumbers([1,1,2,2,4,4,5,5,5])
pickingNumbers([4 ,6 ,5 ,3 ,3 ,1])
pickingNumbers([1 ,2 ,2 ,3 ,1 ,2])
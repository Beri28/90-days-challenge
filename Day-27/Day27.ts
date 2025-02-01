function breakingRecords (scores:number[]):number[]{
    let min:number=scores[0]
    let max:number=scores[0]
    let results:number[]=[0,0]
    for(let i=1;i<scores.length;i++){
        if(scores[i]<min){
            min=scores[i]
            results[1]=results[1]+1
        }
        else if(scores[i]>max){
            max=scores[i]
            results[0]=results[0]+1
        }
    }
    console.log(results)
    return results
}
breakingRecords([10, 5, 20,20, 4 ,5, 2, 25, 1])
breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])

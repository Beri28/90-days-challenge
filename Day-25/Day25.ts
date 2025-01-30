function dynamicArray (n:number,queries:number[][]):number[]{
    let lastAnswer:number=0
    let arr:number[][]=[]
    for(let i=0;i<n;i++){
        arr[i]=[]
    }
    let answers:number[]=[]
    for(let i=0;i<queries.length;i++){
        let query=queries[i]
        if(queries[i][0]===1){
             let id=(queries[i][1]^lastAnswer)%n
             arr[id].push(queries[i][2])
        }
        if(queries[i][0]===2){
            let id=(queries[i][1]^lastAnswer)%n
            lastAnswer=arr[id][queries[i][2]% arr[id].length]
            answers.push(lastAnswer)
       }
    }
    console.log(lastAnswer)
    console.log(answers)
    return answers
}
dynamicArray(2,[[1, 0 ,5],
    [1, 1 ,7],
    [1 ,0 ,3],
    [2 ,1 ,0],
    [2, 1,1]])
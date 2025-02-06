function migratoryBirds (arr:number[]):number{
    let frequency2:number[]=[0,0,0,0,0]
    let start=0
    let end=4
    while(start<=arr.length-1){
        for(let i=start;i<=end;i++){
            ++frequency2[arr[i]-1]
        }
        start=end+1
        end=end+5
        if(end>arr.length-1){
            end=arr.length-1
        }
    }
    console.log(frequency2)
    console.log(frequency2.indexOf(Math.max(...frequency2))+1)
    return frequency2.indexOf(Math.max(...frequency2))+1

    // Code below has not been optimized to handle arrays with very very large amount of numbers

    // let frequency:[{id:number,freq:number}]=[{
    //     id:arr[0],
    //     freq:1
    // }]
    // let max:{id:number,freq:number}={id:0,freq:0}
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         if(arr[i]===arr[j]){
    //             frequency[frequency.findIndex((obj)=>obj.id===arr[i])].freq++
    //         }else{
    //             frequency.findIndex((obj)=>obj.id===arr[j])<0 && frequency.push({
    //                 id:arr[j],
    //                 freq:1
    //             })
    //         }
    //     }
    //     // console.log(frequency[i])
    //     if(frequency[i] && max.freq<frequency[i].freq){
    //         max=frequency[i]
    //     }
    //     if(frequency[i] &&(max.freq===frequency[i].freq && max.id>frequency[i].id)){
    //        max=frequency[i]
    //     }
    // }
    // console.log(frequency)
    // console.log(max)
    // return max.id
}
migratoryBirds([1,1,2,2,3])
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])
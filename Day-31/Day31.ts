function migratoryBirds (arr:number[]):number{
    let frequency:[{id:number,freq:number}]=[{
        id:arr[0],
        freq:1
    }]
    let max:{id:number,freq:number}={id:0,freq:0}
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                //let indx=frequency.findIndex((obj)=>obj.id===arr[i])
                frequency[frequency.findIndex((obj)=>obj.id===arr[i])].freq++
                //frequency[i]++
            }else{
                frequency.findIndex((obj)=>obj.id===arr[j])<0 && frequency.push({
                    id:arr[j],
                    freq:1
                })
            }
        }
        // console.log(frequency[i])
        if(frequency[i] && max.freq<frequency[i].freq){
            max=frequency[i]
        }
        if(frequency[i] &&(max.freq===frequency[i].freq && max.id>frequency[i].id)){
           max=frequency[i]
        }
    }
    console.log(frequency)
    console.log(max)
    return max.id
}
migratoryBirds([1,1,2,2,3])
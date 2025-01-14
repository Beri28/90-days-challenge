const birthday=(arr:number[],day:number,month:number):number=>{
    let tempArray1:number[][]=[]
    for(let i=0;i<arr.length-(month-1);i++){
        let tempArray2:number[]=[]
        let sum:number=0
        for(let j=i;j<i+month;j++){
            tempArray2.push(arr[j])
            sum+=arr[j]
        }
        if(sum===day){
        tempArray1.push(tempArray2)
        }
    }
    console.log(tempArray1,tempArray1.length)
    return tempArray1.length
}
birthday([2,2,1,3,2],4,2)
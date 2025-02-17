function equalizeArray (arr: number[]):number{
    let arr2:{element:number,freq:number}[]=[]
    let max={element:arr[0],freq:1}
    arr2.push({element:arr[0],freq:1})
    arr.forEach((el,index)=>{
        if(index!==0){
            if(arr2.every((element)=>element.element!==el)){
                arr2=[...arr2,{element:el,freq:1}]
            }else{
                for(let i=0;i<arr2.length;i++){
                    if( arr2[i].element===el){
                        arr2[i].freq++
                        if(max.freq<arr2[i].freq) max=arr2[i]
                        break
                    }
                }
            }
        }
    })
    let total=arr2.reduce((acc,curr)=>{
        if(curr.element===max.element && max.freq!==1) return acc
        return acc+curr.freq
    },0)
    if(max.freq===1){
        total=total-1
    }
    return total
}
// equalizeArray([1,2,2,3,2])
// equalizeArray([1,2,1])
// equalizeArray([3,3,2,1,3])
// equalizeArray([37 ,32 ,97 ,35 ,76 ,62])
equalizeArray([10, 27, 9, 10, 100, 38, 30, 32, 45, 29, 27, 29, 32, 38, 32, 38, 14, 38, 29, 30, 63, 29, 63, 91, 54, 10, 63])
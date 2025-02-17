function equalizeArray (arr: number[]){
    let arr2:{element:number,freq:number}[]=[]
    let max=1
    arr2.push({element:arr[0],freq:1})
    arr.forEach((el,index)=>{
        if(index!==0){
            if(arr2.every((element)=>element.element!==el)){
                arr2=[...arr2,{element:el,freq:1}]
            }else{
                for(let i=0;i<arr2.length;i++){
                    if( arr2[i].element===el){
                        arr2[i].freq++
                        if(max<arr2[i].freq) max=arr2[i].freq
                        break
                    }
                }
            }
        }
    })
    let total=arr2.reduce((acc,curr)=>{
        if(curr.freq===max) return acc
        return acc+curr.freq
    },0)
    console.log(total)
    // console.log(max)
    // console.log(arr2)
}
equalizeArray([1,2,2,3,2])
equalizeArray([1,2,1])
equalizeArray([3,3,2,1,3]) //[3, 3, 2, 1, 3] answer 2
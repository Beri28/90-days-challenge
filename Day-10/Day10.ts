const twoArrays=(a:number[],b:number[],k:number):string=>{
    let tempArray:number[]=a
    for(let i=0;i<b.length;i++){
        let temp:number=k-b[i]
        if(tempArray.includes(temp)){
            let location:number=tempArray.indexOf(temp)
            tempArray=tempArray.filter((item,index)=>{
                if(index!==location) return item
            })
        }
        else{
                return "NO"
        } 
    }
    return "YES"
}
console.log(twoArrays([2, 1, 3],[7, 8, 9],10))
console.log(twoArrays([1, 2, 2, 1],[3, 3, 3, 4],5))
const twoArrays=(a:number[],b:number[],k:number):string=>{
    let tempArray:number[]=b
    for(let i=0;i<b.length;i++){
        let temp:number=k-a[i]
        // console.log(tempArray)
        if(tempArray.includes(temp)){
            let location:number=tempArray.indexOf(temp)
            tempArray=tempArray.filter((item,index)=>{
                if(index!==location) return item
            })
        }
        else{
            console.log(k,a[i],temp,tempArray)
            if(k!==a[i]){
                console.log('NO')
                return "NO"
            }
        } 
    }
    console.log("YES")
    return "YES"
}
// console.log(twoArrays([2, 1, 3],[7, 8, 9],10))
// console.log(twoArrays([1, 2, 2, 1],[3, 3, 3, 4],5))
// console.log(twoArrays([1, 3],[3,1],4))
// console.log(twoArrays([2,3,1,1,1],[1, 3, 4, 3 ,3],5))
// console.log(twoArrays([1 ,5 ,1 ,4 ,4 ,2 ,7 ,1 ,2 ,2],[8 ,7 ,1 ,7 ,7 ,4 ,4 ,3 ,6 ,7],9))
console.log(twoArrays([3 ,6 ,8 ,5 ,9 ,9 ,4 ,8 ,4 ,7],[5 ,1 ,0 ,1 ,6 ,4 ,1 ,7 ,4 ,3],9))
// console.log(twoArrays([4 ,4 ,3 ,2 ,1 ,4 ,4 ,3 ,2 ,4],[2 ,3 ,0 ,1 ,1 ,3 ,1 ,0 ,0 ,2],4))
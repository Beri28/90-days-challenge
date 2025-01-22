const balancedSums=(arr:number[]):string=>{
    // let sumAfter:number=0
    // let sumBefore:number=0
    // if(arr.length===1){
    //     console.log("YES")
    //     return "YES"
    // }
    // else if(arr.length===2){
    //     if(arr[0]===0||arr[1]===0){
    //         console.log("YES")
    //         return "YES" 
    //     }
    //     console.log("NO")
    //     return "NO"
    // }
    // const sum=(arrPart:number[])=>{
    //     let sum:number=0
    //     arrPart.forEach(element => {
    //         sum+=element
    //     });
    //     return sum
    // }
    // for(let i=0;i<arr.length;i++){
    //     // if((sum(arr.slice(0,i))===sum(arr.slice(i+1)))){
    //     //     console.log("YES")
    //     //     return "YES"
    //     // }
    //     if((arr.slice(0,i).reduce((total,val)=>total+val,0)===arr.slice(i+1).reduce((total,val)=>total+val,0))){
    //         console.log("YES")
    //         return "YES"
    //     }
    // }
    // console.log("NO")
    // return "NO"
    let totalSum:number = arr.reduce((acc, numb) => acc + numb, 0)
    let leftSum:number = 0;
    
    for(let i = 0; i < arr.length; i++){
        const rightSum:number = totalSum - leftSum - arr[i]
        if(leftSum === rightSum){
            console.log("YES")
            return "YES"
        }
        
        leftSum += arr[i]
    }
    console.log("NO")
    return "NO"
}

balancedSums([1])
balancedSums([1,2,3])
// balancedSums([1,2,3,3])
// balancedSums([2,0,0,0])
const maxMin =(arr:number[],k:number):number=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp:number=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    // console.log(arr)
    let newArray:number[]=arr.slice(0,k)
    // console.log(newArray)
    let maxNumber:number=Math.max(...arr)
    // let maxNumber2:number=Math.max(...arr.filter((number)=>{
    //     if(number!==maxNumber) return number
    // }))
    let maxNumber2:number=arr[arr.length-k]
    let sug1=maxNumber-maxNumber2
    // console.log("max2=",maxNumber2)
    // console.log("High-low=",sug1)
    // console.log("Other",newArray[newArray.length-1]-newArray[0])
    if(newArray[newArray.length-1]-newArray[0]<sug1){
        return newArray[newArray.length-1]-newArray[0]
    }else{
        return sug1
    }
}
console.log(maxMin([1,4,7,2],2))
console.log(maxMin([100,
    200,
    300,
    350,
    400,
    401,
    402],3))
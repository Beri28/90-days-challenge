const findMedian=(arr:number[]):number=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    console.log(arr)
    console.log(arr[Math.floor(arr.length/2)])
    return arr[Math.floor(arr.length/2)]
}
// findMedian([5,3,1,2,4])
// findMedian([0,1,2,4,6,5,3])

const sorting=(arr:number[])=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
}

const flippingMatrix=(arr:number[][]):number=>{
    for(let i=0;i<arr.length;i++){ 
        for(let j=i+1;j<arr[i].length;j++){
            if(arr[i][i]>arr[i][j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    let max_sum=arr[0].length/2
    let sum:number=0
    for(let i=0;i<max_sum;i++){ 
        sum+=arr[i][i]
    }
    console.log(sum)
    return sum
}
flippingMatrix([[2,1],[4,3]])
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
        sorting(arr[i])
    }
    for(let i=0;i<arr.length;i++){ 
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][i]>arr[i][j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    // for(let i=0;i<arr.length;i++){ 
    //     for(let j=0;j<il;j++){
    //         if(i<arr.length-1 && arr[i][j]<arr[i+1][j]){
    //             let temp=arr[i][j]
    //             arr[i][j]=arr[i+1][j]
    //             arr[i+1][j]=temp
    //             // sorting(arr[i+1])
    //         }
    //     }
    // }
    console.log(arr)
    let max_sum=arr[0].length/2
    let sum:number=0
    for(let i=0;i<max_sum;i++){ 
        for(let j=0;j<max_sum;j++){
            sum+=arr[i][j]
        }
    }
    // console.log(sum)
    return sum
}
flippingMatrix([[3,5],[7,16]])
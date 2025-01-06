const plusMinus=(arr:number[])=>{
    let pos:number=0
    let min:number=0
    let zero:number=0;
    arr.forEach(element => {
        if(element<0){
            min++
        }
        if(element>0){
            pos++
        }
        if(element===0){
            zero++
        }
    });
    console.log((pos/arr.length).toFixed(6))
    console.log((min/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))
}

const minMaxSum=(arr:number[])=>{
    let maxSum:number=0
    let minSum:number=0
    for(let i=0;i<=arr.length-1;i++){
        for(let j=i+1;j<=arr.length-1;j++){
            if(arr[i]>arr[j]){
                let temp=arr[j]
                arr[j]=arr[i]
                arr[i]=temp
            }
        }
    }
    for(let i=1;i<=arr.length-1;i++){
        maxSum+=arr[i]
    }
    for(let i=0;i<arr.length-1;i++){
        minSum+=arr[i]
    }
    console.log(minSum," ",maxSum)
}
minMaxSum([7,3,5,9,1])
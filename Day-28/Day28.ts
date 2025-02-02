function diagonalDifference(arr:number[][]):number{
    let sumD1:number=0
    let sumD2:number=0
    for(let i=0;i<arr.length;i++){
        sumD1+=arr[i][i]
        sumD2+=arr[i][arr[i].length-(i+1)]
    }
    return Math.abs(sumD1-sumD2)
}
//console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]))

function miniMaxSum (arr:number[]){
    let min:number=0
    let max:number=0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    for(let i=0;i<4;i++){
        min+=arr[i]
        max+=arr[i+1]
    }
    console.log(min,max)
}

miniMaxSum([7 ,69 ,2 ,221 ,8974])
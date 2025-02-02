function diagonalDifference(arr:number[][]):number{
    let sumD1:number=0
    let sumD2:number=0
    for(let i=0;i<arr.length;i++){
        sumD1+=arr[i][i]
        sumD2+=arr[i][arr[i].length-(i+1)]
    }
    return Math.abs(sumD1-sumD2)
}
console.log(diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]))
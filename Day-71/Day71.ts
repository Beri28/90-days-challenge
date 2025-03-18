function findMedian(arr: number[]): number {
    // Write your code here
    arr.sort((a,b)=>a-b)
    let median=arr[Math.floor(arr.length/2)]
    return median
}

// Day 2
function lonelyinteger(a: number[]): number {
    // Write your code here
    let lonelyInt=a.filter((num)=>a.indexOf(num)===a.lastIndexOf(num))
    console.log(lonelyInt[0])
    return lonelyInt[0]
}

const flippingMatrix=(arr:number[][]):number=>{
    if(arr.length===1) return Math.max(...arr[0])
    for(let i=0;i<arr.length;i++){
        let col:number[]=[]
        arr.forEach((ar)=>col.push(ar[i]))
        if(arr[0][i]<arr[arr.length-1][i] && ((col.indexOf(Math.max(...col)) > col.length/2)|| (col.length<=2 && col.indexOf(Math.max(...col))===1) ) ){
            for(let j=0;j<(arr[i].length)/2;j++){
                let temp=arr[j][i]
                arr[j][i]=arr[(arr.length-1)-j][i]
                arr[(arr.length-1)-j][i]=temp 
            }
        }
    }
    console.log(arr)
    for(let i=0;i<arr.length;i++){ 
        if(arr[i][0]<arr[i][arr.length-1]){
            for(let j=0;j<(arr[i].length)/2;j++){
                let temp=arr[i][(arr[i].length-1)-j]
                arr[i][(arr[i].length-1)-j]=arr[i][j]
                arr[i][j]=temp 
            }
        }
    }
    console.log(arr)
    let max_sum=arr[0].length/2
    let sum:number=0
    for(let i=0;i<max_sum;i++){ 
        for(let j=0;j<max_sum;j++){
            sum+=arr[i][j]
        }
    }
    console.log(sum)
    return sum
}
// flippingMatrix([
//     [112, 42, 83, 119], 
//     [56, 125, 56, 49], 
//     [15, 78, 101, 43], 
//     [62, 98, 114, 108]])
// flippingMatrix([
//     [112, 42, 83, 119], 
//     [56, 125, 56, 49], 
//     [15, 78, 101, 43], 
//     [62, 98, 114, 108]])
flippingMatrix([
    [107, 54, 128, 15], 
    [12, 75, 110, 138], 
    [100, 96, 34, 85], 
    [75, 15, 28, 112]])
// flippingMatrix([
//     [1,2], 
//     [3,4],])

//     107 54 128 15
// 12 75 110 138
// 100 96 34 85
// 75 15 28 112
// expected answer=488
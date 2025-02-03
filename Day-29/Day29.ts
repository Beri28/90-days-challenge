function simpleArraySum(arr:number[]):number{
    let sum:number=0
    sum=arr.reduce((acc,curr)=>acc+curr,sum)
    console.log(sum)
    return sum
}
//simpleArraySum([1,2,3,4,5]) //Output: 15
//simpleArraySum([1, 2 ,3, 4 ,10 ,11]) //Output: 31

function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]){
    let aps:number=0
    let ors:number=0
    for(let i=0;i<apples.length;i++){
        if(apples[i]+a>=s && apples[i]+a<=t){
            aps++
        }
    }
    for(let i=0;i<oranges.length;i++){
        if(oranges[i]+b>=s && oranges[i]+b<=t){
            ors++
        }
    }
    console.log(aps)
    console.log(ors)
}
// countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]) //Output: 1 1
// countApplesAndOranges(2,3,1,5,[2],[-2]) //Output: 1 1
// countApplesAndOranges(7,10,4,12,[2,3,-4],[3,-2,-4]) //Output: 1 2

function getTotalX (a: number[], b: number[]):number{
    let between:number=0
    for(let i=a[a.length-1];i<=b[0];i++){
        if(a.every((val)=>i%val==0) && b.every((val)=>val%i==0)){
            between++
        }
    }
    return between
}
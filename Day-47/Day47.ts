function circularArrayRotation(a: number[], k: number, queries: number[]): number[] {
    // Write your code here
    let newPos:number[]=[]
    queries.forEach(pos=>{
        newPos.push(a[(((a.length-k)+pos)%a.length)])
    })
    // newPos.forEach((pos)=>{
    //     console.log(a[pos])
    // })
    console.log(newPos)
    return newPos
}
circularArrayRotation([3,4,5],2,[1,2])
circularArrayRotation([1,2,3],2,[0,1,2])
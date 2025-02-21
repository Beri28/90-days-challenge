function circularArrayRotation(a: number[], k: number, queries: number[]): number[] {
    // Write your code here
    let newPos:number[]=[]
    queries.map(pos=>{
        newPos.push(a.at(((a.length-k)+pos)%a.length)|| 0)
    })
    return newPos
}
// function circularArrayRotation(a, k, queries) { return queries.map(q => a.at((q - k) % a.length)) }
console.log(circularArrayRotation([3,4,5],2,[1,2]))
console.log(circularArrayRotation([1,2,3],2,[0,1,2]))
function anagram(s: string): number {
    // Write your code here
    if(s.length%2!==0) return -1
    if(s.length===2) return 1
    let changes=0
    let left=s.slice(0,(s.length/2))
    let right=s.slice((s.length/2))
    let rArray:any=right.split('')
    if(left===right) return 0
    if(left.split('').every((l)=>right.includes(l))) return 0
    for(let i=0;i<right.length;i++){
        if(!rArray.includes(left[i])) changes++
        else rArray[i]=undefined
    }
    // console.log("Left:",left)
    // console.log("Right:",right)
    return changes
}

// console.log(anagram('aaabbb'))
// console.log(anagram('ab'))
// console.log(anagram('abc'))
// console.log(anagram('mnop'))
// console.log(anagram('xyyx'))
console.log(anagram('xaxbbbxx'))
console.log(anagram('fdhlvosfpafhalll'))
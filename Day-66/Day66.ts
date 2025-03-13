function anagram(s: string): number {
    // Write your code here
    if(s.length%2!==0) return -1
    if(s.length===2) return 1
    //solution from forum
    // 1. split [s] into left part [l] and right part [r], define [m]&[o] to count
    let l = s.substring(0, s.length / 2)
    let r = s.substring(s.length / 2)
    let m = new Map<string, number>()
    let o = 0

    // 2. count [l] into [m], check [r], count++
    for (let c of l) m.set(c, (m.get(c) || 0) + 1)
    for (let c of r) {
        if (m.has(c) && m.get(c)! > 0) m.set(c, m.get(c)! - 1)
        else o++
    }

    // 3. return [o]
    return o 


    // My solution below fails 10 out of 16 test cases
    // let changes=0
    // let left:any[]=s.slice(0,(s.length/2)).split('')
    // let right:any[]=s.slice((s.length/2)).split('')
    // if(left.every((l)=>right.includes(l)) && right.every((l)=>left.includes(l))) return 0
    // for(let i=0;i<right.length;i++){
    //     let found=left.indexOf(right[i])
    //     if(found===-1) {
    //         changes++
    //     }
    //     else {
    //         left[found]=undefined 
    //     }
    // }
    // return changes
}

console.log(anagram('aaabbb'))
console.log(anagram('ab'))
console.log(anagram('abc'))
console.log(anagram('mnop'))
console.log(anagram('xyyx'))
// console.log(anagram('xaxbbbxx'))
// console.log(anagram('fdhlvosfpafhalll'))
// console.log(anagram('hhpddlnnsjfoyxpciioigvjqzfbpllssuj'))
console.log(anagram('xulkowreuowzxgnhmiqekxhzistdocbnyozmnqthhpievvlj'))
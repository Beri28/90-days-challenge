function makingAnagrams(s1: string, s2: string): number {
    // Write your code here
    // let deletions:number=0
    if(s1===s2) return 0
    if(s1.length===1) return s2.length-1
    if(s2.length===1) return s1.length-1
    let s11:any[]=s1.split('')
    let s22:any[]=s2.split('')
    s1.split('').forEach((letter)=>{
        s22[s22.indexOf(letter)]=undefined
        // s22.includes(letter)? s22[s22.indexOf(letter)]=undefined :deletions++
    })
    s2.split('').forEach((letter)=>{
        s11[s11.indexOf(letter)]=undefined
        // s11.includes(letter)?s11[s11.indexOf(letter)]=undefined :deletions++
    })
    return s11.join('').length + s22.join('').length
}
console.log(makingAnagrams('cde','abc'))
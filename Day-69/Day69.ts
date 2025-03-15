function alternatingCharacters(s: string): number {
    // Write your code here
    let sArray:string[]=s.split('')
    if(sArray.every((l)=>l===s[0])) return s.length-1
    let deletions=0
    for(let i=0;i<sArray.length;i=i+1){
        if(sArray[i]==sArray[i+1]){
            deletions++
        }
    }
    // console.log(deletions)
    return deletions
}
console.log(alternatingCharacters('AAAA'))
console.log(alternatingCharacters('BBBBB'))
console.log(alternatingCharacters('ABABABAB'))
console.log(alternatingCharacters('AAABBB'))
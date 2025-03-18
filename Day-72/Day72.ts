function palindromeIndex(s: string): number {
    // Write your code here
    if(s.split('').every((l)=>l===s[0])) return -1
    for(let i=0;i<s.length;i++){
        let reverseS=''
        let temp=i===0? s.slice(i+1):s.slice(0,i)+s.slice(i+1)
        for(let i=temp.length-1;i>=0;i--){
            reverseS+=temp[i]
        } 
        console.log(temp,reverseS)
        if(temp===reverseS) return i
    }
    return -1
}
// console.log(palindromeIndex('bcbc'))
// console.log(palindromeIndex('aaab'))
// console.log(palindromeIndex('baa'))
// console.log(palindromeIndex('aaa'))

function gridChallenge(grid: string[]): string {
    // Write your code here
    for(let i=0;i<grid.length;i++){
        let temp=grid[i].split('')
        temp.sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0))
        grid[i]=temp.join("")
    }
    for(let i=0;i<grid.length-1;i++){
        for(let j=0;j<grid[i].length;j++){
            if(grid[i][j].charCodeAt(0)>grid[i+1][j].charCodeAt(0)){
                // console.log("NO")
                return "NO"
            }
        }
    }
    // console.log("YES")
    return 'YES'
}
// gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'])

function superDigit(n: string, k: number): number {
    // Write your code here
    n=n.padEnd(n.length*k,n)
    // console.log(n)
    if(n.length===1) return parseInt(n)
    let superD=n.split('').reduce((acc,num)=>acc+ parseInt(num),0)
    return superDigit(superD.toString(),0)
}
console.log(superDigit('9875',4))
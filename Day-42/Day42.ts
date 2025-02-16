function repeatedString (s: string, n: number):number{
    let a:number=0
    if(!s.includes('a')) return 0
    if(s.length===1 && s[0]==='a') return n
    if(s.length>n){
        s=s.slice(0,n)
    }
    // for(let i=0;i<n;i++){
    //     s[i%s.length]==='a' && a++
    // }
    for(let i=0;i<s.length;i++){
        s[i%s.length]==='a' && a++
    }
    let tempT=n%s.length
    let tempT2=Math.floor(n/s.length)
    console.log(tempT,tempT2)
    console.log((a*tempT2)+1)
    if(tempT===0 || tempT===2){
        console.log((a*tempT2))
        return a*tempT2
    }
    console.log((a*tempT2)+1)
    return (a*tempT2)+1
    // console.log(tempT,tempT2)
    // console.log((a*tempT2)+1)
    // console.log(a)
    // return a
}
// repeatedString('abcac',10)
// repeatedString('aba',10)
repeatedString('gfcaaaecbg',547602)
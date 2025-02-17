function repeatedString (s: string, n: number):number{
    let a:number=0
    if(!s.includes('a')) return 0
    if(s.length===1 && s[0]==='a') return n
    if(s.length>n){
        s=s.slice(0,n)
    }
    for(let i=0;i<s.length;i++){
        s[i%s.length]==='a' && a++
    }
    let tempT=n%s.length
    let tempT2=Math.floor(n/s.length)
    a=a*tempT2
    if(tempT>0){
        for(let i=0;i<tempT;i++){
            if(s[i]==='a'){
                a++
            }
        }
    }
    console.log(a)
    return a
}
repeatedString('abcac',10)
repeatedString('aba',10)
// repeatedString('gfcaaaecbg',547602)
repeatedString('bab',725261545450)
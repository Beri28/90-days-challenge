function appendAndDelete(s: string, t: string, k: number): string {
    // Write your code here
    if(s===t) return 'Yes'
    let count=0
    let end=s.length>t.length?s.length:t.length
    for(let i=0;i<end;i++){
        if(s[i]===t[i]) continue
        else{
            count+=s.length-i
            // console.log(s.length,i)
            // console.log("Count first:",count)
            s=i===0?'':s.slice(0,i)
            // console.log("S first:",s)
            let temp=t.slice(i)
            // console.log(temp)
            count+=temp.length
            // console.log("Count third:",count)
            if(count===k) return 'Yes'
            break
        }
    }
    console.log(count)
    return 'No'
}
console.log(appendAndDelete('hackerhappy','hackerrank',9))
console.log(appendAndDelete('y','yu',2))
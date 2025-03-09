function funnyString(s: string): string {
    // Write your code here
    let rIndex=s.length-1
    for(let i=0;i<s.length-1;i++){
        if(Math.abs(s.charCodeAt(i)-s.charCodeAt(i+1))!==Math.abs(s.charCodeAt(rIndex)-s.charCodeAt(rIndex-1))) return "Not Funny"
        rIndex--
    }
    return "Funny"
}
console.log(funnyString('lmnop'))
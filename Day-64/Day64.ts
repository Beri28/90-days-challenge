function hackerrankInString(s: string): string {
    // Write your code here
    let word='hackerrank'.split('')
    if(!s.includes(word[0]) || s.length<10) return "NO"
    let currIndex=0
    for(let i=0;i<word.length;i++){
        currIndex=s.indexOf(word[i],currIndex)
        if(currIndex===-1) return "NO"
    }
    return "YES"
}
console.log(hackerrankInString('hjj'))
console.log(hackerrankInString('hereiamstackerrank'))
console.log(hackerrankInString('hackerworld'))
console.log(hackerrankInString('hhaacckkekraraannk'))
console.log(hackerrankInString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'))
function caesarCipher(s: string, k: number): string {
    // Write your code here
    let ogLowerCase='abcdefghijklmnopqrstuvwxyz'.split('')
    let ogUpperCase='abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    let newSentence:string=''
    for(let i=0;i<s.length;i++){
        if(!ogLowerCase.includes(s[i]) && !ogUpperCase.includes(s[i])){
            newSentence+=s[i]
        }
        else if(s[i]===s[i].toUpperCase()){
            newSentence+=ogUpperCase[(ogUpperCase.indexOf(s[i])+k)%26]
        }else{
            newSentence+=ogLowerCase[(ogLowerCase.indexOf(s[i])+k)%26]
        }
    }
    console.log(newSentence)
    return newSentence
}
caesarCipher('middle-Outz',2)
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
// caesarCipher('middle-Outz',2)

function plusMinus(arr: number[]): void {
    // Write your code here
    let negCount=0
    let posCount=0
    let zeroCount=0
    arr.forEach((num)=>{
        if(num===0){
            zeroCount++
        }
        else if(num>0){
            posCount++
        }
        else if(num<0){
            negCount++
        }
    })
    console.log((posCount/arr.length).toFixed(6))
    console.log((negCount/arr.length).toFixed(6))
    console.log((zeroCount/arr.length).toFixed(6))
}
plusMinus([-4, 3, -9, 0, 4, 1])
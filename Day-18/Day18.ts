const superDigit=(number:string,k:number):number=>{
    if(number.length==1) return parseInt(number)
    let temp:string=k===0?number:(number.split('').reduce((acc,digit)=>acc+parseInt(digit),0)*k).toString()
    let superdigit=superDigit(temp.slice(0,Math.floor(temp.length/2)),0) + superDigit(temp.slice(Math.floor(temp.length/2)),0)
    return superdigit.toString().length===1?superdigit:superDigit(superdigit.toString(),0)
}
console.log(superDigit('123',3))
console.log(superDigit('116',4))
console.log(superDigit('9875',4))
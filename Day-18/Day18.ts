const superDigit=(number:string,k:number):number=>{
    for(let i=0;i<k;i++){
        number+=number
    }
    return number.split('').reduce((acc,digit)=>acc+parseInt(digit),0)
    // if(number.length==1) return parseInt(number)
    // return superDigit(number.slice(0,Math.floor(number.length/2))) + superDigit(number.slice(Math.floor(number.length/2)))
}
console.log(superDigit('1',0))
console.log(superDigit('116',0))
console.log(superDigit('9875987598759875',0))
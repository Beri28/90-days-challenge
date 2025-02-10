function findDigits  (n:number):number{
    let digits:number=0
    let number:string=n.toString()
    for(let i=0;i<number.length;i++){
        if(n%parseInt(number[i])===0){
            digits++
        }
    }
    console.log(digits)
    return digits
}
findDigits(124)
findDigits(111)
findDigits(10)
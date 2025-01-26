const counterGame=(num:number,check=true)=>{
    console.log('2:',check)
    let Louise:boolean=check
    if(num===1){
        if(Louise){ 
            console.log("Louise")
            return "Louise"
        }
        else{
            console.log("Richard")
            return "Richard"
        }
    }
    let x=Math.log10(num)/Math.log10(2)
    console.log(x)
    if(x===Math.floor(x)){
        // console.log("It's a power of 2")
        num/=2
        // console.log(num)
        counterGame(num,!Louise)
    }else{
        num=num-Math.pow(2,Math.floor(x))
        // console.log(num)
        counterGame(num,!Louise)
    }
}
console.log(counterGame(132))
// counterGame(128)
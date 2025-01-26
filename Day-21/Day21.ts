const counterGame=(num:number):string=>{
    let Louise:boolean=false
    while(num>1){
        let x=Math.log10(num)/Math.log10(2)
        if(x===Math.floor(x)){
            num/=2
        }else{
            num=num-Math.pow(2,Math.floor(x))
        }
        Louise=!Louise
    }
    if(Louise){ 
        return "Louise"
    }
    else{
        return "Richard"
    }
}
console.log(counterGame(132))
console.log(counterGame(6))
// counterGame(128)
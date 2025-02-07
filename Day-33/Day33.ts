function bonAppetit (bill: number[], k: number, b: number){
    let totalBill=(bill.reduce((acc,amt)=>acc+amt,0))/2
    let actualBill=(bill.reduce((acc,amt,index)=>{
        if(index!==k) return acc+amt
        return acc
    },0))/2
    if(actualBill===b){ 
        console.log("Bon Appetit")
    }
    else{
        console.log(totalBill-actualBill)
    }
}
console.log(bonAppetit([3,10,2,9],1,12))
console.log(bonAppetit([3,10,2,9],1,7))
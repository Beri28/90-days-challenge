const pageCount=(n:number,p:number):number=>{
    if(n-p===1 || n===p){
        if((n%2===0 && n-p===1) && p!==1){
            return 1
        }
        return 0
    }
    if(n-p<=p-1){
       return Math.floor((n-p)/2)
    }
    return p%2===0?p/2:((p-1)/2)
}
// console.log(pageCount(96993,70030))
console.log(pageCount(7,4))
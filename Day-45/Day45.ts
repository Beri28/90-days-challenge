function squares(a: number, b: number): number {
    let amount:number = 0;
    
    let number:number = Math.ceil(Math.sqrt(a));
        
    while(number*number <= b) {
        amount += 1;
        number += 1;
    }
        
    return amount;
    // My own solution below
    // let count:number=0
    // if(a>b) return 0
    // if(a===b){
    //     if((Math.floor(Math.sqrt(a))===Math.sqrt(a))) return 1
    //     return 0
    // }
    // let mid=Math.floor((b+a)/2)
    // return squares(a,mid)+squares(mid+1,b)
}
console.log(squares(178809602, 330598161))
console.log(squares(284829997, 636760792))
console.log(squares(344808647, 444776424))



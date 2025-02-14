function beautifulDays (i: number, j: number, k: number):number{
    let bDays:number=0
    let current=i
    while(current<=j){
        let cString=current.toString()
        let reverse:string=''
        for(let n=cString.length-1;n>=0;n--){
            reverse=reverse+cString[n]
        }
        console.log(reverse)
        if(Math.abs(current-parseInt(reverse))%k===0){
            bDays++
        }
        current++
    }
    console.log(bDays)
    return bDays
}
beautifulDays(20 ,23 ,6)
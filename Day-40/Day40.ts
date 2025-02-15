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
// beautifulDays(20 ,23 ,6)

function jumpingOnClouds (c:number[],k:number){
    let e=99
    let i=0
    // let position=(i+k)%c.length
    for(let position=(i+k)%c.length; i++;){
        console.log(position)
        if(c[position]===1){
             e=e-2
        }else{
            e=e-1
        }
        if(position===0){
            console.log("Return")
            return
        }
        // i++
        // position=(i+k)%c.length
    }
    // while(position>=0){
    //     console.log(position)
    //     if(c[position]===1){
    //          e=e-2
    //     }else{
    //         e=e-1
    //     }
    //     if(position===0){
    //         console.log("Return")
    //         return
    //     }
    //     i++
    //     position=(i+k)%c.length
    // }
    console.log(e)
}
jumpingOnClouds([0,0,1,0],2)
jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0],2)
function dayOfProgrammer(year:number) {
    if(year>1918){
        if(year%400===0){
            console.log("12.09.",year)
        }
        else if(year%100!==0 && year%4===0){
            console.log("12.09.",year)
        }else{
            console.log("13.09.",year)
        }
    }
    else if(year<1918){
        if(year%4===0){
            console.log("12.09.",year)
        }else{
            console.log("13.09.",year)
        }
    }else{
        // No days =342
        console.log("26.09.",year)
    }
}
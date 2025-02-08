function getMoneySpent (b:number,keyboards:number[],drives:number[]):number{
    let max=0
    for(let i=0;i<keyboards.length;i++){
        for(let j=0;j<drives.length;j++){
            if((keyboards[i]+drives[j])>max && (keyboards[i]+drives[j])<=b) max=keyboards[i]+drives[j]
        }
    }
    if(max>b || max===0){
        console.log(-1)
        return -1
    }else{
        console.log(max)
        return max
    }

}
getMoneySpent(60,[40,50,60],[5,8,12])
getMoneySpent(10,[3,1],[5,2,8])
getMoneySpent(5,[4],[5])
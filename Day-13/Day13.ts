const sockMerchant=(n:number,arr:number[]):number=>{
    let pairs:number=0
    let alreadyChecked:number[]=[]
    for(let i=0;i<n;i++){
        let check:number=0
        if(!alreadyChecked.includes(arr[i])){ 
            arr.forEach((item)=>{
                if(arr[i]===item){
                    check++
                    !alreadyChecked.includes(arr[i]) && alreadyChecked.push(item)
                }
            })
        }
        pairs+=Math.floor(check/2)
    }
    console.log(pairs)
    return pairs
}
sockMerchant(7,[1,2,1,2,1,3,2])
sockMerchant(9,[10,20,20,10,10,30,50,10,20])
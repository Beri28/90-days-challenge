const plusMinus=(arr:number[])=>{
    let pos:number=0
    let min:number=0
    let zero:number=0;
    arr.forEach(element => {
        if(element<0){
            min++
        }
        if(element>0){
            pos++
        }
        if(element===0){
            zero++
        }
    });
    console.log((pos/arr.length).toFixed(6))
    console.log((min/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))
}
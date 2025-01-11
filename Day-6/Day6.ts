const flippingBits=(num:number):number=>{
    let temp:number=num
    let binaryNum:string=''
    if(temp===0){
            binaryNum='0'+binaryNum
    }
    while(temp>0){
        if(temp===1){
            binaryNum='1'+binaryNum
        }
        else if(temp%2===0){
            binaryNum='0'+binaryNum
        }else{
            binaryNum='1'+binaryNum
        }
        temp=Math.floor(temp/2)
    }
    let numZeroes:number=32-binaryNum.length
    let binaryNum2:number=0
    let numZeroes2:string=binaryNum2.toFixed(numZeroes)
    numZeroes2=numZeroes2.slice(numZeroes2.indexOf('.')+1)
    if(binaryNum.length<22){
        binaryNum2=parseFloat(binaryNum)
        console.log(binaryNum)
        console.log(binaryNum2)
        let numZeroes2:string=binaryNum2.toFixed(numZeroes)
        numZeroes2=numZeroes2.slice(numZeroes2.indexOf('.')+1)
        binaryNum=numZeroes2+binaryNum
    }else{
        if(binaryNum.length===22){
            binaryNum='0000000000'+binaryNum
        }if(binaryNum.length===23){
            binaryNum='000000000'+binaryNum
        }if(binaryNum.length===24){
            binaryNum='00000000'+binaryNum
        }if(binaryNum.length===25){
            binaryNum='0000000'+binaryNum
        }
        if(binaryNum.length===26){
            binaryNum='000000'+binaryNum
        }if(binaryNum.length===27){
            binaryNum='00000'+binaryNum
        }if(binaryNum.length===28){
            binaryNum='0000'+binaryNum
        }
        if(binaryNum.length===29){
            binaryNum='000'+binaryNum
        }
        if(binaryNum.length===30){
            binaryNum='00'+binaryNum
        }
        if(binaryNum.length===31){
            binaryNum='0'+binaryNum
        }
    }
    let tempArray:string[]|string=binaryNum.split('')
    for(let i=0;i<binaryNum.length;i++){
        if(binaryNum[i]==='1'){
            tempArray[i]='0'
        }
        if(binaryNum[i]==='0'){
            tempArray[i]='1'
        }
    }
    let newNum:number=0
    for(let i=0;i<32;i++){
        if(tempArray[i]==='1'){
            newNum+= Math.pow(2,31-i)
        }
    }
    console.log(binaryNum)
    console.log(newNum)
    return newNum
}
// flippingBits(0)
// flippingBits(1)
// flippingBits(2)
// flippingBits(3)
// flippingBits(4)
// flippingBits(5)
// flippingBits(6)
// flippingBits(7)
// flippingBits(8)
// flippingBits(9)
// flippingBits(2147483647)
// flippingBits(802743475)
flippingBits(35601423)
// flippingBits(10)
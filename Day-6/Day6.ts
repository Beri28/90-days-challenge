const flippingBits=(num:number)=>{
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
    let binaryNum2:number=parseFloat(binaryNum)
    let numZeroes2:string=binaryNum2.toFixed(numZeroes)
    numZeroes2=numZeroes2.slice(numZeroes2.indexOf('.')+1)
    binaryNum=numZeroes2+binaryNum
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
            console.log(31-i)
            newNum+= Math.pow(2,31-i)
        }
    }
    console.log(binaryNum)
    console.log(tempArray.join(''))
    console.log(newNum)
}
// flippingBits(0)
flippingBits(1)
// flippingBits(2)
// flippingBits(3)
// flippingBits(4)
// flippingBits(5)
// flippingBits(6)
// flippingBits(7)
// flippingBits(8)
flippingBits(9)
// flippingBits(10)
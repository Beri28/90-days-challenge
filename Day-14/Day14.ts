const caesarCipher=(textString:string,rotator:number)=>{
    // textString=textString.toLowerCase()
    let newString:string[]=textString.split('')//.join("")
    console.log(newString)
    const alphabet:string='abcdefghijklmnopqrstuvwxyz'
    const alphabet2:string=alphabet.toUpperCase()
    for(let i=0;i<textString.length;i++){
        if(newString[i]===newString[i].toUpperCase()){
            newString[i]=alphabet[alphabet2.indexOf(newString[i])+rotator]
        }else{
            newString[i]=alphabet[alphabet.indexOf(newString[i])+rotator] 
        }
    }
    console.log(newString.join(""))
}
caesarCipher("There's a stairman in the sky",3)
const caesarCipher=(textString:string,rotator:number):string=>{
    let newString:string[]=textString.split('')//.join("")
    const alphabet:string='abcdefghijklmnopqrstuvwxyz'
    const alphabet2:string=alphabet.toUpperCase()
    for(let i=0;i<textString.length;i++){
        if(!alphabet.includes(newString[i]) && !alphabet2.includes(newString[i])){
            newString[i]=newString[i]
        }
        else if(newString[i]===newString[i].toUpperCase()){
            newString[i]=alphabet2[(alphabet2.indexOf(newString[i])+rotator)%26]
        }else if(newString[i]===newString[i].toLowerCase()){
            newString[i]=alphabet[(alphabet.indexOf(newString[i])+rotator)%26] 
        }
    }
    console.log(newString.join(""))
    return newString.join("")
}
caesarCipher("There's a stairman in the sky",3)
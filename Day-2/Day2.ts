const isPangram=(sentence:string):string=>{
    sentence=sentence.split(" ").join("")
    sentence=sentence.toLowerCase()
    const letters:string[]=['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i=0;i<=letters.length-1;i++){
        if(sentence.includes(letters[i])){
        }else{
            console.log("Not Pangram")
            return "not pangram"
        }
    }
    console.log("Pangram")
    return "pangram"
}
isPangram("We promptly judged antique ivory buckles for the next prize")
isPangram("We promptly judged antique ivory buckles for the prize")
isPangram("We prom")
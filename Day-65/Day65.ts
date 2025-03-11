function pangrams(s: string): string {
    // Write your code here
    s=s.toLowerCase()
    const letters:string[]=['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    if(letters.every((l)=>s.includes(l))) return "pangram"
    else{
        return "not pangram"
    }

}
console.log(pangrams("We promptly judged antique ivory buckles for the next prize"))
console.log(pangrams("We promptly judged antique ivory buckles for the prize"))
console.log(pangrams("We prom"))
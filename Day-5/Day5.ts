const matchingStrings=(strings:string[],queries:string[]):number[]=>{
    let occurence:number[]=[]
    for(let i=0;i<queries.length;i++){
        let frequency:number=0
        let restOfStrings:string[]=i==0?[...strings.slice(i+1)]:[...strings.slice(i+1),...strings.slice(0,i)]
        strings.forEach((string)=>{
            if(queries[i]===string) frequency++
        })
        //!restOfStrings.includes(strings[i]) && 
        occurence.push(frequency)
    }
    console.log(occurence)
    return occurence
}
matchingStrings(['aba','baba','aba','xzxb'],['aba','xzxb','ab'])
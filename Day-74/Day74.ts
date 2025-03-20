function marsExploration(s: string): number {
    // Write your code here
    let change=0
    for(let i=0;i<s.length;i=i+3){
        let temp=s.substring(i,i+3)
        if(temp!=='SOS'){
            temp[0] !=='S' && change++
            temp[1] !=='O' && change++
            temp[2] !=='S' && change++
        }
    }
    console.log(change)
    return change
}
marsExploration('SOSTOT')
marsExploration('SOSSPSSQSSOR')
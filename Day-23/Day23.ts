function sumXor (n:number):number{
    let counter:number=0
    for(let i=0;i<=n;i++){
        if((n+i)===(n^i)) counter++
    }
    console.log(counter)
    return counter
}

sumXor(6)
// sumXor(5)
// sumXor(4)
// sumXor(3)
// sumXor(2)
// sumXor(1)
// sumXor(1000000000000000)
// sumXor(9000000)
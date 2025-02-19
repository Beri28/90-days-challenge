function squares(a: number, b: number): number {
    let count:number=0
    for(let i=a;i<=b;i++){
        let sqrt=Math.sqrt(i)
        if(Math.floor(sqrt)===sqrt) count++
    }
    console.log(count)
    return count
}
squares(24,49)
squares(3,9)
squares(17,24)

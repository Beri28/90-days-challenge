function lonelyInteger(numbers:number[]):number{
    let frequency:number[]=[]
    let temp:number[]=[]
    for(let i=0;i<numbers.length;i++){
        frequency=i!==0?[...numbers.slice(i+1),...numbers.slice(0,i)]:[...numbers.slice(i+1)]
        if(!frequency.includes(numbers[i])){
            temp.push(numbers[i])
        }
    }
    return temp[0]
}
console.log(lonelyInteger([1,2,3,4,3,2,1]))
console.log(lonelyInteger([1,1,2]))
console.log(lonelyInteger([0,0,1,2,1]))
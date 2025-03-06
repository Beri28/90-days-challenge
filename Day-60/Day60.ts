function icecreamParlor(m: number, arr: number[]): number[] {
    // Write your code here
    let lIndex=arr.lastIndexOf(m/2)
    let fIndex=arr.indexOf(m/2)
    if(fIndex!==lIndex) return [fIndex+1,lIndex+1]
    let current=1
    while(current<m){
        if(arr.includes(current) && arr.includes(m-current)){
            let temp1=arr.indexOf(current)+1
            let temp2=arr.indexOf(m-current)+1
            if(temp2>temp1) return [temp1,temp2]
            return [temp2,temp1]
        }
        current++
    }
    return []
    
}
console.log(icecreamParlor(100,[5 ,75 ,25]))
console.log(icecreamParlor(200,[150 ,24 ,79 ,50 ,88 ,345 ,3]))
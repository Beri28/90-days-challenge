function missingNumbers(arr: number[], brr: number[]): number[] {
    // Write your code here
    let indexes:number[]=[]
    let already:number[]=[]
    const checkMultiApp=(ar:number[],n:number):number=>{
       let currentIndex=0
       let count=0
       while(ar.includes(n,currentIndex)){
            count++
            currentIndex=ar.indexOf(n,currentIndex)+1
       }
       return count
    }
    brr.forEach((num,index)=>{
        if(!arr.includes(num) && !indexes.includes(num)){
            indexes.push(num)
        }
        // if(arr.includes(num)){
        //     arr=index===0?arr.slice(1):[...arr.slice(0,index),...arr.slice(index+1)]
        // }
        if(already.includes(num) && !indexes.includes(num)){
            if(checkMultiApp(arr,num)!==checkMultiApp(brr,num)){
                indexes.push(num)
            }
        }
        !already.includes(num) && already.push(num)

    })
    // console.log(already)
    return indexes.sort((a,b)=>a-b)
}
console.log(missingNumbers([203 ,204 ,205 ,206 ,207 ,208 ,203 ,204 ,205 ,206],[203 ,204 ,204 ,205 ,206 ,207 ,205 ,208 ,203 ,206 ,205 ,206 ,204]))
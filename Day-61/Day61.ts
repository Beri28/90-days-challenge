function missingNumbers(arr: number[], brr: number[]): number[] {
    // Write your code here
    // let indexes:number[]=[]
    // let already:number[]=[]
    // const checkMultiApp=(ar:number[],n:number):number=>{
    //    let currentIndex=0
    //    let count=0
    //    while(ar.includes(n,currentIndex)){
    //         count++
    //         currentIndex=ar.indexOf(n,currentIndex)+1
    //    }
    //    return count
    // }
    // brr.forEach((num,index)=>{
    //     if(!arr.includes(num) && !indexes.includes(num)){
    //         indexes.push(num)
    //     }
    //     if(already.includes(num) && !indexes.includes(num)){
    //         if(checkMultiApp(arr,num)!==checkMultiApp(brr,num)){
    //             indexes.push(num)
    //         }
    //     }
    //     !already.includes(num) && already.push(num)

    // })
    // return indexes.sort((a,b)=>a-b)

    // optimized code
    let indexes: number[] = [];
    const already: Set<number> = new Set();

    const checkMultiApp = (ar: number[], n: number): number => {
        return ar.reduce((count, num) => (num === n ? count + 1 : count), 0);
    };

    brr.forEach((num) => {
        if (!arr.includes(num) && !indexes.includes(num)) {
            indexes.push(num);
        }

        if (already.has(num) && !indexes.includes(num)) {
            if (checkMultiApp(arr, num) !== checkMultiApp(brr, num)) {
                indexes.push(num);
            }
        }

        already.add(num);
    });

    return indexes.sort((a, b) => a - b);
}
console.log(missingNumbers([203 ,204 ,205 ,206 ,207 ,208 ,203 ,204 ,205 ,206],[203 ,204 ,204 ,205 ,206 ,207 ,205 ,208 ,203 ,206 ,205 ,206 ,204]))
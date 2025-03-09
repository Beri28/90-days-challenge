function missingNumbers(arr: number[], brr: number[]): number[] {
    // Write your code here
    let brr2: any[] = brr;
    while (arr.length > 0) {
        if (brr2.indexOf(arr[0]) >= 0) {
            const index = brr2.indexOf(arr[0])
            brr2[index] = undefined
        }
        arr.shift()
    }
    brr2=brr2.filter((num)=>num!==undefined)
    return brr2.sort((a,b)=>a-b);

    // code from discussion tab, how is it different from mine?
    // while (arr.length > 0) {
    //     if (brr.indexOf(arr[0]) >= 0) {
    //         const index = brr.indexOf(arr[0])
    //         brr[index] = undefined
    //     }
    //     arr.shift()
    // }
    // const remaminingSorted = Array.from(new Set(
	// brr
    //     .filter(n => !isNaN(n))
    //     .sort((a, b) => a - b)))
        
    // return remaminingSorted
}
console.log(missingNumbers([203 ,204 ,205 ,206 ,207 ,208 ,203 ,204 ,205 ,206],[203 ,204 ,204 ,205 ,206 ,207 ,205 ,208 ,203 ,206 ,205 ,206 ,204]))
function saveThePrisoner(n: number, m: number, s: number): number {
    // Write your code here
    return (m - 1  + s - 1 ) % n + 1
    // return (m%n)+(s-1) My code
}

// console.log(saveThePrisoner(352926151 ,380324688 ,94730870))
// console.log(saveThePrisoner(208526924 ,756265725 ,150817879))
// console.log(saveThePrisoner(999999999 ,999999999 ,2))
console.log(saveThePrisoner(19934 ,744554784 ,19821))
// console.log(saveThePrisoner(18 ,360398845 ,1))
console.log(saveThePrisoner(2 ,867250528 ,2))
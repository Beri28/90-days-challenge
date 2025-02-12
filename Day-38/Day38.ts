function angryProfessor (k: number, a: number[]):string{
    let currentThreshold:number=0
    let i:number=0
    while(i<a.length){
        if(a[i]<=0) currentThreshold++
        if(currentThreshold===k){
            return "NO"
        }
        i++
    }
    return "YES"
}
console.log(angryProfessor(3,[-2,-1,0,1,2]))
console.log(angryProfessor(3,[-1,-3,4,2]))
console.log(angryProfessor(2,[0,-1,2,1]))
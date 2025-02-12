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
// console.log(angryProfessor(3,[-2,-1,0,1,2]))
// console.log(angryProfessor(3,[-1,-3,4,2]))
// console.log(angryProfessor(2,[0,-1,2,1]))

function permutationEquation (p: number[]):number[]{
    let y:number[]=[]
    for(let i=1;i<=p.length;i++){
        y.push(p.indexOf(p.indexOf(i)+1)+1) 
    }
    console.log(y)
    return y
}
permutationEquation([5,2,1,3,4])
permutationEquation([2,3,1])
permutationEquation([4,3,5,1,2])
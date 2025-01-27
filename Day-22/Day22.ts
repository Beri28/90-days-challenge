function towerBreakers (n:number,m:number){
    let towers:number[]=[]
    for(let i=0;i<n;i++){
        towers.push(m)
    }
    let tower:number=0
    let P1:boolean=false
    while(towers[tower]>1){
        let breaker=towers.length===1?towers[tower]-1: Math.ceil(towers[tower]/2)
        towers[tower]=towers[tower]-breaker
        tower++
        tower=tower%n
        P1=!P1
    }
    if(towers.every((tower)=>tower===1)){
        if(P1) return 1
        return 2
    }
}
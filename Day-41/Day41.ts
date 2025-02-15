function climbingLeaderboard (ranked: number[], player: number[]):number[]{
    let ranked2:{score:number,rank:number}[]=[]
    let playerRank:number[]=[]
    ranked.forEach((rank,index)=>{
        if(index===0){
            return ranked2.push({score:rank,rank:1})
        }else{
            if(rank===ranked[index-1]){
                return ranked2.push({score:rank,rank:ranked2[index-1].rank})
            }
            return ranked2.push({score:rank,rank:ranked2[index-1].rank+1})
        }
    })
    for(let i=0;i<player.length;i++){
        if(player[i]>ranked2[0].score){
            playerRank.push(1)
            continue
        }
        else if(player[i]<ranked2[ranked2.length-1].score){
            playerRank.push(ranked2[ranked2.length-1].rank+1)
            continue
        }
        for(let j=0;j<ranked2.length;j++){
            if(ranked2[j].score===player[i]){
                playerRank.push(ranked2[j].rank)
                break
            }else{
                if(j!==ranked2.length-1){
                    if((ranked2[j].score>player[i]) && (player[i]>ranked2[j+1].score)){
                        playerRank.push(ranked2[j+1].rank)
                        break
                    }
                }
            }
        }
    }
    console.log(playerRank)
    // console.log(ranked2)
    return playerRank
}
// climbingLeaderboard([100,90,90,80],[70,80,105])
// climbingLeaderboard([100,100,50,40,40,20,10],[5 ,25 ,50 ,120])
climbingLeaderboard([100 ,90 ,90 ,80 ,75 ,60],[50 ,65 ,77 ,90 ,102])
function howManyGames(p:number,d:number,m:number,s:number): number {
    // Write your code here
    if(p===m) return s/p
    let games=1
    s-=p
    while(s>=m){
        if(p<=m){
            s-=m
            // }
        }else{
            p=p-d
            s-=p
        }
        games++
    }
    console.log(games)
    return games
}
howManyGames(20,3,6,70)
howManyGames(20 ,3 ,6 ,85)
howManyGames(20 ,3 ,6 ,80)
howManyGames(1 ,100 ,1 ,9777)
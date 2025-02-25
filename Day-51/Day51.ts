function howManyGames(p:number,d:number,m:number,s:number): number {
    // Write your code here
    s-=p
    let games=1
    while(s>0){
        console.log("Before:",s)
        if(p<=m){
            s-=m
        }else{
            p=p-d
            s-=p
        }
        console.log("After:",s)
        games++
    }
    console.log(games)
    return games
}
howManyGames(20,3,6,70)
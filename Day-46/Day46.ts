function viralAdvertising(n: number): number {
    // Write your code here
    let cumLikes=2
    let likes=2
    let sharedTo=3
    for(let i=2;i<=n;i++){
        sharedTo=likes*3
        likes=Math.floor(sharedTo/2)
        cumLikes+=likes
    }
    console.log(cumLikes)
    return cumLikes
}
viralAdvertising(3)
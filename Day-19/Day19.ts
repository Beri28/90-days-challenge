const gridChallenge =(grid:string[]):string=>{
    const alphabet:string='abcdefghijklmnopqrstuvwxyz'
    for(let i=0;i<grid.length;i++){
        let gridLetters:string[]=grid[i].split('')
        for(let m=0;m<gridLetters.length-1;m++){
            for(let j=0;j<gridLetters.length-1;j++){
                if(alphabet.indexOf(gridLetters[j])>alphabet.indexOf(gridLetters[j+1])){
                    let temp=gridLetters[j]
                    gridLetters[j]=gridLetters[j+1]
                    gridLetters[j+1]=temp
                }
            }
        }
        grid[i]=gridLetters.join("")
        console.log(grid[i])
        // console.log(alphabet.indexOf(grid[i][0]),alphabet.indexOf(grid[i+1][0]))
        if(i<grid.length-1){
            if(alphabet.indexOf(grid[i][0])>alphabet.indexOf(grid[i+1][0])){
                console.log("NO")
                return "NO"
            }
        }
    }
    
    console.log("YES")
    return "YES"
}
// gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'])
// gridChallenge(['abc', 'ade', 'efg'])
// gridChallenge(['sur',
//     'eyy',
//     'gxy'])
gridChallenge(['vpvv',
    'pvvv',
    'vzzp',
    'zzyy'])
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
    }
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid.length-1;j++){
            if(alphabet.indexOf(grid[j][i])>alphabet.indexOf(grid[j+1][i])){
                console.log("NO")
                return "NO"
            }
        }
    }
    console.log("YES")
    return "YES"
}

gridChallenge(['kc',
    'iu'])
gridChallenge(['uxf',
    'vof',
    'hmp'])
const diagonalDifference=(matrix:number[][])=>{
    let leftDiagonal:number=0
    let rightDiagonal:number=0
    for(let i=0;i<matrix[0].length;i++){
        // for(let j=i;j<matrix[0].length;j++){
        //     console.log(matrix[i][j])
        // }
        console.log(matrix[i])
        leftDiagonal+=matrix[i][i]
        rightDiagonal+=matrix[i][matrix[0].length-1-i]
        // console.log(matrix[i][matrix[0].length-1-i])
    }
    console.log(Math.abs(leftDiagonal-rightDiagonal))
    // console.log(matrix[0].length)
}
diagonalDifference([[1,2,3],[4,5,6],[7,8,9]])
diagonalDifference([[1,2,3],[4,5,6],[9,8,9]])
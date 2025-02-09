function hurdleRace  (k:number,height:number[]){
   let  max:number=Math.max(...height)
   if(max>k) return max-k
   return 0 
}
// formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]])
console.log(hurdleRace(1,[1,2,3,3,2]))
console.log(hurdleRace(4,[1,6,3,5,2]))
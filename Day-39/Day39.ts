function cutTheSticks (arr: number[]): number[]{
    let length:number[]=[]
    while(arr.length>=1){
        length.push(arr.length)
        let min:number=Math.min(...arr)
        arr=arr.filter((num)=>{
            if(num!==min) return num-min
        })
    }
    console.log(length)
    return length
}
cutTheSticks([1,2,3])
cutTheSticks([5, 4, 4, 2, 2, 8])
cutTheSticks([1 ,2 ,3 ,4 ,3 ,3 ,2 ,1])
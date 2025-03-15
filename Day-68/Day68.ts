function minimumBribes(q: number[]): void {
    // Write your code here
    let bribes:number=0
    for(let i=0;i<q.length;i++){
        if(Math.abs((i+1)-q[i])>2 && Math.abs((i+1))<q[i]) {
            console.log("Too chaotic")
            return
        }
        else{
            if((i+1)-q[i]<0) bribes+=Math.abs((i+1)-q[i])
        }
    }
    console.log(bribes)
}
minimumBribes([2, 1, 5, 3, 4])
minimumBribes([2, 5, 1, 3, 4])
minimumBribes([1 ,2 ,5 ,3 ,7 ,8 ,6 ,4])
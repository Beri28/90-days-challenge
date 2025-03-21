function removeElement(nums:number[],val:number):number {
    let k=0
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]===val){
            let temp=nums[i]
            nums[i]=nums[i+1]
            nums[i+1]=temp
        }else{
            k++
        }
    }
    return k
}
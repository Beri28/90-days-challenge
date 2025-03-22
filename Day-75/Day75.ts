function removeElement(nums:number[],val:number):number {
    let k=0
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]===val) {
            k++
        }
        if(i>0 && nums[i-1]===val){
            if(nums[i+1]===val && nums[i]!==val){
                let temp=nums[i]
                nums[i]=nums[i-1]
                nums[i-1]=temp
            }
            if(nums[i+1]!==val){
                let temp=nums[i-1]
                nums[i-1]=nums[i+1]
                nums[i+1]=temp
            }
        }
    }
    // k=nums.indexOf(val)
    console.log(nums,k)
    return k
}
removeElement([3,2,2,3],3)
removeElement([0,1,2,2,3,0,4,2],2)
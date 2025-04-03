type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
    arr.sort((a,b)=>(fn(a)-fn(b)))
    // for some reason the block of code below doesn't sort the array
    // for(let i=0;i<arr.length;i++){
    //     for(let j=1;j<arr.length;j++){
    //         if(fn(arr[i])>fn(arr[j])){
    //             let t=arr[i]
    //             arr[i]=arr[j]
    //             arr[j]=t
    //         }
    //     }
    // }
    return arr
};
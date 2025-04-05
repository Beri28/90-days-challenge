type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    // optimized code
    let res = {};
    let arr = [...arr1,...arr2];
    for(let obj of arr){
    let id = obj.id;
    if(res[id]){
    res[id] = {...res[id],...obj}
    }
    else{
    res[id] = obj;
    }
    }
    return Object.values(res)
    // fails 3 test cases out of 40 needs to be  optimized due to time limit
    // let dup0:number[]=[...arr2.map((val)=>(val.id))]
    // let dup1:number[]=[]
    // for(let i=0;i<arr1.length;i++){
    //     if(dup0.includes(arr1[i].id)){
    //         dup1.push(arr1[i].id)
    //     }
    // }
    // let newArray:ArrayType[]=[...arr2.map((val)=>{
    //     if(dup1.includes(val.id)){
    //         let found=arr1.find((val2)=>val2.id===val.id)
    //         return {...found,...val}
    //     }
    //     return val
    // }),...arr1.filter((val)=>!dup1.includes(val.id))]
    // newArray.sort((a,b)=>(a.id-b.id))
    // return newArray
};
console.log(join([{"id":1,"b":{"b": 94},"v":[4,3],"y":48}],[{"id":1,"b":{"c": 84},"v":[1,3]}]))
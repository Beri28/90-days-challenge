type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    // if(arr1.length===1 && arr2.length===1 ){
    //     return [{...arr1[0],...arr2[0]}]
    // }
    // let newArray:ArrayType[]=[...arr2.map((val)=>{
    //     let found=arr1.findIndex(({id})=>id===val.id)
    //     if(found!==-1){
    //         console.log(found)
    //         arr1=found===0?arr1.slice(1):[...arr1.slice(0,found),...arr1.slice(found+1)]
    //         console.log("First:",arr1[found])
    //         console.log("Second:",val)
    //         return {...arr1[found],...val}
    //     }
    //     return {...val}
    // })]
    // newArray=[...newArray,...arr1].sort((a,b)=>(a.id-b.id))
    // return newArray
    let dup0:number[]=[...arr2.map((val)=>(val.id))]
    let dup1:number[]=[]
    for(let i=0;i<arr1.length;i++){
        if(dup0.includes(arr1[i].id)){
            dup1.push(arr1[i].id)
        }
    }
    let newArray:ArrayType[]=[...arr2.map((val)=>{
        if(dup1.includes(val.id)){
            let found=arr1.find((val2)=>val2.id===val.id)
            return {...found,...val}
        }
        return val
    }),...arr1.filter((val)=>!dup1.includes(val.id))]
    newArray.sort((a,b)=>(a.id-b.id))
    return newArray
};
console.log(join([{"id":1,"b":{"b": 94},"v":[4,3],"y":48}],[{"id":1,"b":{"c": 84},"v":[1,3]}]))

// let dup0:number[]=[...arr2.map((val)=>(val.id))]
//     let dup1:number[]=[]
//     for(let i=0;i<arr1.length;i++){
//         if(!dup0.includes(arr1[i].id)){
//             dup1.push(arr1[i].id)
//         }
//     }
//     console.log(dup1)
//     console.log(arr1.filter((val)=>dup1.includes(val.id)))
//     let newArray:ArrayType[]=[...arr2,...arr1.filter((val)=>dup1.includes(val.id))]
//     newArray.sort((a,b)=>(a.id-b.id))
//     console.log(newArray)
//     return newArray
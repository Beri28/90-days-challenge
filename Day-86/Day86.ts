type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    let newArray:Obj[][]=[]
    for(let i=0;i<arr.length;i=i+size){
        newArray.push(arr.slice(i,(i+size)))
    }
    console.log(newArray)
    return newArray
};

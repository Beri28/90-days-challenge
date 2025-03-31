type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    console.log(Object.values(obj).length)
    if((Array.isArray(obj) && obj.length===0) || Object.values(obj).length===0) return true
    return false
};
console.log(isEmpty({"length": 0}))
console.log(isEmpty([]))
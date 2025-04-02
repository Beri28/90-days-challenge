interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    const length=this.length
    if(length===0) return -1
    return this[length-1]
};
const createCounter = function(n) {
    
    return function() {
        return n++
    };
};

let expect = function(val) {
    function toBe(val2){
        try {
            if(val===val2) return true
            throw Error();
        } catch (error) {
            throw new Error("Not Equal");
            
        }
    }
    function notToBe(val2){
        try {
            if(val!==val2) return true
            throw Error();
        } catch (error) {
            throw new Error("Equal");
            
        }
    }
    return {
        toBe,
        notToBe
    }
};
console.log(expect(5).toBe(5))
console.log(expect(5).toBe(null))
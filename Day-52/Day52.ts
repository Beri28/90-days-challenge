const createCounter1 = function(n) {
    
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
// console.log(expect(5).toBe(5))
// console.log(expect(5).toBe(null))

function createCounter(init){
    let old=init
    function increment(){
        old+=1
        return old 
    }
    function decrement(){
        old-=1
        return old
    }
    function reset(){
        old=init
        return old
    }
    return {
       increment,
       decrement,
       reset
    }
}
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
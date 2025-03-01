type F = (x: number) => number;

function compose(functions: F[]): F {
    return function(x) {
        if(functions.length===0) return x
        let prevReturn=x
        for(let i=functions.length-1;i>=0;i--){
            if(i===functions.length-1) prevReturn= functions[i](x)
            else prevReturn=functions[i](prevReturn)
        }
        return prevReturn
    }
};

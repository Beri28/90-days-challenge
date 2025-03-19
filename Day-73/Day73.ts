function BalancedBrackets(s:string):string{
    if(s.includes('(') && !s.includes(')')) return "NO"
    if(s.indexOf('(') > s.indexOf(')')) return "NO"
    if(s.includes('{') && !s.includes('}')) return "NO"
    if(s.indexOf('{') > s.indexOf('}')) return "NO"
    if(s.includes('[') && !s.includes(']')) return "NO"
    if(s.indexOf('[') > s.indexOf(']')) return "NO"
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            let temp=s.slice(i+1,s.lastIndexOf(')'))
            if(temp.length===0) continue
            return BalancedBrackets(temp)
        }
        else if(s[i]==='{'){
            let temp=s.slice(i+1,s.lastIndexOf('}'))
            if(temp.length===0) continue
            return BalancedBrackets(temp)
        }
        else if(s[i]==='['){
            let temp=s.slice(i+1,s.lastIndexOf(']'))
            if(temp.length===0) continue
            return BalancedBrackets(temp)
        }
    }
    // if(s[0]==='('){
    //     if(s[s.length-1]===')'){
    //         let temp=s.slice(1,s.lastIndexOf(')'))
    //         BalancedBrackets(temp)
    //     }else{
    //         return "NO"
    //     }
    // }
    // if(s[0]==='{'){
    //     if(s[s.length-1]==='}'){
    //         let temp=s.slice(1,s.lastIndexOf('}'))
    //         BalancedBrackets(temp)
    //     }else{
    //         return "NO"
    //     }
    // }
    // if(s[0]==='['){
    //     if(s[s.length-1]===']'){
    //         let temp=s.slice(1,s.lastIndexOf(']'))
    //         BalancedBrackets(temp)
    //     }else{
    //         return "NO"
    //     }
    // }
    return "YES"
}

console.log(BalancedBrackets('{[()]}'))
console.log(BalancedBrackets('{[(])}'))
console.log(BalancedBrackets('{{[[(())]]}}'))
console.log(BalancedBrackets('{}'))
console.log(BalancedBrackets('{{{{'))
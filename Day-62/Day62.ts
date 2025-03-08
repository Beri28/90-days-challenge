function minimumNumber(n: number, password: string): number {
    // Return the minimum number of characters to make the password strong
    let numbers = "0123456789"
    let lower_case = "abcdefghijklmnopqrstuvwxyz"
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let special_characters = "!@#$%^&*()-+"
    let pArray=password.split('')
    let count=0
    if(!pArray.some((el)=>numbers.includes(el))){
        count++
    }
    if(!pArray.some((el)=>lower_case.includes(el))){
        count++
    }
    if(!pArray.some((el)=>upper_case.includes(el))){
        count++
    }
    if(!pArray.some((el)=>special_characters.includes(el))){
        count++
    }
    console.log(count)
    if(n<6){
        count=count+(6-n)
    }
    console.log(count)
    return count
}
console.log(minimumNumber(5,'2bbbb'))
console.log(minimumNumber(5,'2bb#A'))
console.log(minimumNumber(11,'#HackerRank'))
class TimeLimitedCache {
    keyCount:number=0
    keyValues:{key: number, value: number, duration: number}[]=[]
    keys:number[]=[]
    expiredKeys:number[]=[]
    timeOuts:{key:number,tO:number}[]=[]
    constructor() {
        
    }

    set(key: number, value: number, duration: number): boolean {
        if(this.keys.includes(key) && !this.expiredKeys.includes(key)){
            let temp=this.keyValues.findIndex((value)=>value.key===key)
            this.keyValues[temp]={key,value,duration}
            this.keyCount++
            clearTimeout(this.timeOuts.find((val)=>val.key===key)?.tO)
            let tO=setTimeout(() => {
                this.expiredKeys.push(key)
                this.keyCount--
            }, duration) as unknown as number;
            this.timeOuts=this.timeOuts.map((val)=>{
                if(val.key==key){
                    return {key,tO}
                }
                return val
            })
            return true
        }
        if(!this.keys.includes(key) && !this.expiredKeys.includes(key)){
            this.keyValues.push({key,value,duration})
            this.keys.push(key)
            this.keyCount++
            let tO=setTimeout(() => {
                this.expiredKeys.push(key)
                this.keyCount--
            }, duration) as unknown as number;
            this.timeOuts.push({key,tO})
            // return true
        }
        return false
    }
    
    get(key: number): number {
        if(this.keys.includes(key) && !this.expiredKeys.includes(key)){
            return this.keyValues.find((value)=>value.key===key)!?.value
        } 
        return -1
    }
    
    count(): number {
        return this.keyCount
    }
}
const timeLimitedCache = new TimeLimitedCache()
let temp1=timeLimitedCache.set(1, 42, 1000);
let temp2=timeLimitedCache.get(1)
let temp3=timeLimitedCache.count()
console.log(temp1)
console.log(temp2)
console.log(temp3)
/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
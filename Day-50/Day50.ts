function libraryFine(d1: number, m1: number, y1: number, d2: number, m2: number, y2: number): number {
    // Write your code here
    if(d1==d2 && m1===m2&&y1===y2) return 0
    if(y1===y2){
        if(m1===m2 && d1<d2) return 0
        if(m1<m2) return 0
        if(m1===m2 && d1!==d2) return 15* (d1-d2)
        if(m1>m2) return 500* (m1-m2)
    }
    if(y1>y2) return 10000
    return 0
}
console.log(libraryFine(14,7,2018,5,7,2018))
console.log(libraryFine(9 ,6 ,2015,6 ,6 ,2015))
console.log(libraryFine(2 ,5 ,2015,30 ,5 ,2015))
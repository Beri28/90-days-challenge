function designerPdfViewer (h: number[], word: string):number{
    let alphabet='abcdefghijklmnopqrstuvwxyz'
    let height:number=0
    let width:number=word.length
    for(let i=0;i<word.length;i++){
        let tempH=h[alphabet.indexOf(word[i])]
        if(height<tempH) height=tempH
    }
    console.log(height)
    console.log("Area:",width*height)
    return width*height
}
designerPdfViewer([1, 3, 1,3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7],'zaba')
designerPdfViewer([1, 3, 1, 3, 1, 4 ,1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],'abc')

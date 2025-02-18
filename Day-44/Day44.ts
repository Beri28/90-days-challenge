function acmTeam(topic: string[]): number[] {
    let max=0
    let groups=0
    topic.forEach((top,index)=>{
        for(let i=index+1;i<topic.length;i++,index!==topic.length-1){
            let topics=0
            for(let j=0;j<topic[i].length;j++){
                if(top[j]==='1' || topic[i][j]==='1'){
                    topics++
                }
            }
            if(max===topics){
                groups++
            }else{
                if(max<topics) {
                    max=topics
                    groups=1
                }
            }
        }
    })
    console.log(max,groups)
    return [max,groups]

}
// acmTeam(['10101', '11110', '00010'])
// acmTeam(['10101','11100','11010','00101'])
acmTeam(['11101',
    '10101',
    '11001',
    '10111',
    '10000',
    '01110'])
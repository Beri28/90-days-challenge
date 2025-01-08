const timeConversion=(timeString:string):string=>{
    let timeOfDay:string=timeString[timeString.length-2]+timeString[timeString.length-1]
    let hour:number=parseInt(timeString[0]+timeString[1])
    if(timeOfDay==='AM'){
        if(timeString==='12:00:00AM'){
            return '00:00:00'
        }else if(hour===12){
            hour=hour-12
            let newTime:string=hour.toString()+timeString.slice(2,timeString.length-2)
            return newTime
        }
    }else if(timeOfDay==='PM' && timeString==='12:00:00PM'){
        return '12:00:00'
    }
    else if(timeOfDay==='PM'){
        if(hour===12){
            let newTime:string=hour.toString()+timeString.slice(2,timeString.length-2)
            return newTime
        }else{
            hour=hour+12
            let newTime:string=hour.toString()+timeString.slice(2,timeString.length-2)
            return newTime
        }
        
    }
    return timeString
}

timeConversion('07:05:45PM')
timeConversion('12:01:00PM')
timeConversion('12:01:00AM')
timeConversion('12:00:00AM')
timeConversion('12:00:00PM')
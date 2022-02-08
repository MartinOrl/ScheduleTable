const getTimestamp = () => {
    let timestamp = new Date(Date.now()).getHours()*3600 + new Date(Date.now()).getMinutes()*60 + new Date(Date.now()).getSeconds()
    return timestamp
}

export const processData = data => {
    const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

    console.log(data)
    

    for(let j = 0; j < data.BINFO_1.length; j++){
        let day = data.BINFO_1[j]
        if(day.id.slice(0,3) === days[new Date(Date.now()).getDay() - 1]){
        // if(day.id.slice(0,3) === "Thu"){
            let match = false
            for(let i = 0; i < day.subjects.length; i++){
                let subject = day.subjects[i]


                let startMins = Math.floor(subject.startTime/100)*3600 + Number(String(subject.startTime).slice(-2))*60
                let timestamp = getTimestamp()
                let startDiff = startMins - timestamp
                if(startDiff > 0){
                    // console.log("Event not started yet")
                    match = subject
                    match["timeDiff"] = startDiff
                    match["eventType"] = 1
                    break;
                }
                else if(startDiff < 0){
                    // console.log("Event has already started")

                    let endMins = Math.floor(subject.endTime/100)*3600 + Number(String(subject.endTime).slice(-2))*60
                    let timestamp = getTimestamp()
                    // console.log(`${endMins}  | ${timestamp}`)

                    let endDiff = endMins - timestamp
                    // console.log(endDiff)
                    if(endDiff > 0){
                        match = subject
                        match["timeDiff"] = endDiff
                        match["eventType"] = 2
                        
                        
                        break;
                    }

                }
            }

            if(match){
       
                
                return match
            }
        }
    }
    return false
}
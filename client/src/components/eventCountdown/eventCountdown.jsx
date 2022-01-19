import React, {useState, useEffect} from 'react'
import Countdown from 'react-countdown'

import WeeklyData from '../../data/scheduleData'
import { ToggleModal } from '../../redux/modalReducer/modalActions'

import { ComponentContainer, MasterContainer, Timer } from './eventCountdownStyles'
import { connect } from 'react-redux';
import { SetActiveSubject } from '../../redux/activeSubjectReducer/activeSubjectActions'
import { createStructuredSelector } from 'reselect';
import { SelectLanguage } from './../../redux/langReducer/langSelectors';

const getTimestamp = () => {
    let timestamp = new Date(Date.now()).getHours()*3600 + new Date(Date.now()).getMinutes()*60 + new Date(Date.now()).getSeconds()
    return timestamp
}

const processData = () => {
    const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

    for(let j = 0; j < WeeklyData.BINFO_1.length; j++){
        let day = WeeklyData.BINFO_1[j]
        if(day.id.slice(0,3) === days[new Date(Date.now()).getDay() - 1]){
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

const renderer = ({hours, minutes, seconds, completed}) => {
    if(completed){

    }
    return <Timer>{("0" + hours).slice(-2)} : {("0" + minutes).slice(-2)} : {("0" + seconds).slice(-2)}</Timer>
}

const EventContainer = ({toggleModal, setActiveSubject, lang}) => {

    const [data, setData] = useState(false)
    
    useEffect(() => {
        let data = processData()
        setInterval(() => {
            setData(false)
        }, data.timeDiff*1000)
        setActiveSubject(data.id)
        setData(data)
        
    }, [data])
    
    const langVar = {
        "event": [
            {
                "en": "Upcoming event",
                "sk": "Následujúca hodina"
            },
            {
                "en": "Current event",
                "sk": "Súčasná hodina"
            }
        ],
        "type": [
            {
                "en": "Seminar",
                "sk": "Cvičenie"
            },
            {
                "en": "Lecture",
                "sk": "Prednáška"
            }
            
        ]
    }

    return (
        <MasterContainer>
            <div>
                <h2>Events</h2>
                {
                    data 
                    ? 
                    <ComponentContainer>
                        <p>{data.eventType === 1 ? langVar.event[0][lang] : langVar.event[1][lang]}</p>
                        <div onClick={() => toggleModal({data: data,subject:"subject"})}>
                            <div>
                                <h1>{data.name}</h1>
                                <p>{data.type !== "dummy" ? langVar.type[data.type-1][lang] : ""}</p>
                            </div>
                            <div>
                                <p>{data.teacher}</p>
                                <Countdown date={Date.now() + data.timeDiff*1000} renderer={renderer} />
                            </div>
                        </div>
                    </ComponentContainer> 
                    : 'All events are finished for today'
                }
            </div>


            
           
        </MasterContainer>
    )
}

const mapState = createStructuredSelector({
    lang: SelectLanguage
})

const mapDispatch = dispatch => ({
    toggleModal: data => dispatch(ToggleModal(data)),
    setActiveSubject: id => dispatch(SetActiveSubject(id))
})

export default connect(mapState,mapDispatch)(EventContainer)

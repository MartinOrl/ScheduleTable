import React, {useState, useEffect} from 'react'
import Countdown from 'react-countdown'

import { ToggleModal } from '../../redux/modalReducer/modalActions'

import { ComponentContainer, MasterContainer, Timer } from './eventCountdownStyles'
import { connect } from 'react-redux';
import { SetActiveSubject } from '../../redux/activeSubjectReducer/activeSubjectActions'
import { createStructuredSelector } from 'reselect';
import { SelectLanguage } from './../../redux/langReducer/langSelectors';
import { SelectGroup } from '../../redux/groupReducer/groupSelectors'


import { processData } from './helper';
import { GroupData } from './../../data/scheduleData';
import { LessonInfoLanguages, ScheduleLanguages } from '../../data/languageMutations';

const renderer = ({hours, minutes, seconds, completed}) => {
    if(completed){

    }
    return <Timer>{("0" + hours).slice(-2)} : {("0" + minutes).slice(-2)} : {("0" + seconds).slice(-2)}</Timer>
}

const EventContainer = ({toggleModal, setActiveSubject, lang, group}) => {

    const [data, setData] = useState(false)
    
    useEffect(() => {

        let data = processData(GroupData[group])
        setInterval(() => {
            setData(false)
        }, data.timeDiff*1000)
        setActiveSubject(data.id)
        setData(data)
        
    }, [data])
    
    return (
        <MasterContainer>
            <div>
                <h2>{ScheduleLanguages.eventHeading[lang]}</h2>
                {
                    data 
                    ? 
                    <ComponentContainer>
                        <p>{data.eventType === 1 ? LessonInfoLanguages.eventState[0][lang] : LessonInfoLanguages.eventState[1][lang]}</p>
                        <div onClick={() => toggleModal({data: data,subject:"subject"})}>
                            <div>
                                <h1>{data.name}</h1>
                                <p>{data.type !== "dummy" ? LessonInfoLanguages.lessonTypes[data.type-1][lang] : ""}</p>
                            </div>
                            <div>
                                <p>{data.teacher}</p>
                                <Countdown date={Date.now() + data.timeDiff*1000} renderer={renderer} />
                            </div>
                        </div>
                    </ComponentContainer> 
                    : LessonInfoLanguages.finished[lang]
                }
            </div>


            
           
        </MasterContainer>
    )
}

const mapState = createStructuredSelector({
    lang: SelectLanguage,
    group: SelectGroup
})

const mapDispatch = dispatch => ({
    toggleModal: data => dispatch(ToggleModal(data)),
    setActiveSubject: id => dispatch(SetActiveSubject(id))
})

export default connect(mapState,mapDispatch)(EventContainer)

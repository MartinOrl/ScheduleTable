import React from 'react'
import styled from 'styled-components'
import TableEvent from '../../components/tableEvent/tableEvent'

import { Week, PageContainer, MasterContainer } from './scheduleStyles'

import WeeklyData from '../../data/scheduleData'
import TableGraphics from './tableGraphics'
import { ToggleModal } from '../../redux/modalReducer/modalActions'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { SelectLanguage } from './../../redux/langReducer/langSelectors';
import { SelectActiveSubject } from './../../redux/activeSubjectReducer/activeSubjectSelectors';


const Dummy = styled.div`
    width: ${props => props.diff*80 + "px"};
    margin-right: 16px;
`


const ScheduleTable = ({toggleModal, lang, activeSubject}) => {
    const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

    return (
        <PageContainer>
            <TableGraphics />
            
            {
                WeeklyData.BINFO_1.map(day => {
              
                    return <Week key={day.id} match={day.id.slice(0,3) === days[new Date(Date.now()).getDay()-1] ? 1 : 0} >
                        <h1>{day.lang_id[lang].slice(0,3)}</h1>
                        <div>
                            {
                                day.subjects.map((subject,i) => {
                                    if(subject.type === "dummy"){
                                        return <Dummy key={i} diff={subject.diff} />
                                    }
                                    return <TableEvent key={i} active={subject.id === activeSubject && day.id.slice(0,3) === days[new Date(Date.now()).getDay()-1]}  {...subject} action={() => toggleModal(subject)} />
                                })
                            }
                        </div>
                        
                    </Week>
                    
                })
            }
        </PageContainer>
    )
}

const Schedule = ({toggleModal, lang, activeSubject}) => {
    return (
        <MasterContainer>
            <h2>Schedule</h2>
            <ScheduleTable toggleModal={toggleModal} lang={lang} activeSubject={activeSubject} />
        </MasterContainer>
    )
}

const mapState = createStructuredSelector({
    lang: SelectLanguage,
    activeSubject: SelectActiveSubject
})

const mapDispatch = dispatch => ({
    toggleModal: data => dispatch(ToggleModal(data))
})

export default connect(mapState,mapDispatch)(Schedule)

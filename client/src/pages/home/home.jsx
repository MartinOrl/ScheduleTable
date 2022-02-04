import React from 'react';
import styled from 'styled-components';


import Modal from '../../components/modal/modal'
import EventContainer from './../../components/eventCountdown/eventCountdown';
import { connect } from 'react-redux';
import { SelectModal } from '../../redux/modalReducer/modalSelectors';
import { createStructuredSelector } from 'reselect';
import Schedule from './../schedule/schedule';
import { SelectGroup } from '../../redux/groupReducer/groupSelectors';


import { GroupData } from '../../data/scheduleData';



const MasterContainer = styled.div`
    display: flex;
    @media screen and (max-width: 768px){
      flex-direction: column;
      width: 90%;
    }
`

const Home = ({modal, group}) => {



  return (
    <MasterContainer>
        <Modal {...modal} />
        <EventContainer />
        <Schedule data={GroupData[group]} />
    </MasterContainer>
  )
  
};

const mapState = createStructuredSelector({
  modal: SelectModal,
  group: SelectGroup
  
})

export default connect(mapState,null)(Home);

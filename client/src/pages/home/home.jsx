import React from 'react';
import styled from 'styled-components';


import Modal from '../../components/modal/modal'
import EventContainer from './../../components/eventCountdown/eventCountdown';
import { connect } from 'react-redux';
import { SelectModal } from '../../redux/modalReducer/modalSelectors';
import { createStructuredSelector } from 'reselect';
import Schedule from './../schedule/schedule';



const MasterContainer = styled.div`
    display: flex;
`

const Home = ({modal}) => {
  return (
    <MasterContainer>
        <Modal {...modal} />
        <EventContainer />
        <Schedule />
    </MasterContainer>
  )
  
};

const mapState = createStructuredSelector({
    modal: SelectModal,
  
  })

export default connect(mapState,null)(Home);

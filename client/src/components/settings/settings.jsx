import React from 'react';

import { ModalContainer, ModalWindow, OffToggle, ModalBackground } from './settingsStyles'

import { CloseModal } from '../../redux/modalReducer/modalActions'
import { connect } from 'react-redux';

const Settings = ({displayStatus, closeModal}) => {
  return (
      <ModalContainer displayStatus={displayStatus === "settings" ? 1 : 0}>
          <ModalBackground  displayStatus={displayStatus === "settings" ? 1 : 0}/>
          <ModalWindow displayStatus={displayStatus === "settings" ? 1 : 0}>
              <OffToggle onClick={() => closeModal()} />
          </ModalWindow>
      </ModalContainer>
  )
};

const mapDispatch = dispatch => ({
    closeModal: () => dispatch(CloseModal())
})

export default connect(null, mapDispatch)(Settings);

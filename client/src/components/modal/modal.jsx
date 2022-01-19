import React from 'react'

import { ModalContainer, ModalWindow, Category, CategoriesContainer, OffToggle, ModalBackground } from './modalStyles'

import {ReactComponent as Pin} from '../../assets/pin.svg'
import {ReactComponent as Clock} from '../../assets/clock.svg'
import {ReactComponent as Web} from '../../assets/web.svg'
import {ReactComponent as School} from '../../assets/school.svg'
import { CloseModal } from '../../redux/modalReducer/modalActions'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { SelectLanguage } from '../../redux/langReducer/langSelectors'



const Modal = ({data,displayStatus, closeModal, lang}) => {
    const {room,teacher,type, time, fullName} = data
    return (
        <ModalContainer displayStatus={displayStatus} >
            <ModalBackground displayStatus={displayStatus} onClick={() => closeModal()} />
            <ModalWindow displayStatus={displayStatus} link={data.link}>
                <OffToggle onClick={() => closeModal()} />
                <h2>{fullName}</h2>
                <p>{teacher}</p>
                <span></span>
        
                <CategoriesContainer>
                    <div>
                        <Category>
                            <Pin />
                            <p>{room}</p>
                        </Category>
                        <Category>
                            <Clock />
                            <p>{time}</p>
                        </Category>
                    </div>
                    <div>
                        <Category>
                            <School />
                            <p>{type === 1 ? 'Cvičenie' : 'Prednáška'}</p>
                        </Category>
                        <Category>
                            <Web />
                            <p>Cisco Webex</p>
                        </Category>
                    </div>
              
                </CategoriesContainer>
        
                <span></span>
          
                <p>{lang === "en" ? "Connect" : "Pripojiť sa"}</p>
            </ModalWindow>
            
        </ModalContainer>
    )
}

const mapState = createStructuredSelector({
    lang: SelectLanguage
})

const mapDispatch = dispatch => ({
    closeModal: () => dispatch(CloseModal())
})

export default connect(mapState, mapDispatch)(Modal)

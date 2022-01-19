import { ModalActionTypes } from './modalActions'

const INITIAL = {
    displayStatus: false,
    data: false
}

const  ModalReducer = (state = INITIAL, action) => {
    switch(action.type){
        case ModalActionTypes.TOGGLE_MODAL:
            return {
                displayStatus: action.payload.subject,
                data: action.payload.data
            }
        case ModalActionTypes.CLOSE_MODAL:
            return{
                displayStatus: false,
                data: state.data
            }
        default:
            return state
    }
}

export default ModalReducer
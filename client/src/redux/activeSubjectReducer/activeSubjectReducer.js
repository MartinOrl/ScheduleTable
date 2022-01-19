import { ActiveSubjectTypes } from './activeSubjectActions'

const INITIAL = {
    id: ''
}

const ActiveSubjectReducer = (state = INITIAL, action) => {
    switch(action.type){
        case ActiveSubjectTypes.SET_ACTIVE_SUBJECT:
            return {
                id: action.payload
            }
        default:
            return state
    }
}

export default ActiveSubjectReducer
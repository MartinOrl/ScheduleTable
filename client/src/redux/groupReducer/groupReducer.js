import { GroupActionTypes } from "./groupAction";

const INITIAL = {
    group: 54
}

const GroupReducer = (state = INITIAL, action) => {
    switch(action.type){
        case GroupActionTypes.SET_GROUP:
            return {
                group: action.payload
            }
        default:
            return state
    }
}

export default GroupReducer
import { LangActionTypes } from "./langActions";

const INITIAL = {
    lang: 'sk'
}

const LangReducer = (state = INITIAL, action) => {
    switch(action.type){
        case LangActionTypes.SET_LANG:
            return {
                lang: action.payload
            }
        default:
            return state
    }
}

export default LangReducer
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ActiveSubjectReducer from './activeSubjectReducer/activeSubjectReducer';
import GroupReducer from './groupReducer/groupReducer';
import LangReducer from './langReducer/langReducer';
import ModalReducer from './modalReducer/modalReducer';


const rootReducer = combineReducers({
    modal: ModalReducer,
    language: LangReducer,
    activeSubject: ActiveSubjectReducer,
    group: GroupReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['language','group']
}

export default persistReducer(persistConfig, rootReducer)
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ActiveSubjectReducer from './activeSubjectReducer/activeSubjectReducer';
import LangReducer from './langReducer/langReducer';
import ModalReducer from './modalReducer/modalReducer';


const rootReducer = combineReducers({
    modal: ModalReducer,
    language: LangReducer,
    activeSubject: ActiveSubjectReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['language']
}

export default persistReducer(persistConfig, rootReducer)
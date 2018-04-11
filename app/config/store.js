import AuthReducer from './auth-reducer';
import {
    createStore,
    combineReducers
} from 'redux';

export default function configureStore() {
    return createStore(
        combineReducers({
            AuthReducer
        })
    )
}


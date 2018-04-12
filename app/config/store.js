import AuthReducer from './auth-reducer';
import StackoverflowReducer from './stackoverflow-reducer';
import createSagaMiddleware from 'redux-saga';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { postsSaga } from './actions';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
     let store = createStore(
            combineReducers({
                AuthReducer,
                StackoverflowReducer
            }),
            applyMiddleware(sagaMiddleware)
        );

    sagaMiddleware.run(postsSaga);

    return store;
}

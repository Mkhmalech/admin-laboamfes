import { Store, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { History } from "history";

import {createRootReducer, rootSaga} from './store'

import { composeWithDevTools } from 'redux-devtools-extension'


export default function configureStore(history : History, initialState : LaboFesState): Store<LaboFesState>{

    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers = composeWithDevTools({})

    const store : any = createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
    );
    
    sagaMiddleware.run(rootSaga);

    return store;
}
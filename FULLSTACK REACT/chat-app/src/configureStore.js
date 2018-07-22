import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import logger from 'redux-logger';

const configureStore = () => {
    return createStore(reducers, applyMiddleware(logger));
}

export default configureStore;
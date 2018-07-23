import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import logger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const configureStore = () => {
    return createStore(reducers, applyMiddleware(logger, thunk, promise));
}

export default configureStore;
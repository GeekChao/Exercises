import {createStore} from 'redux';
import reducers from './reducers/index';

const configureStore = () => {
    return createStore(reducers);
}

export default configureStore;
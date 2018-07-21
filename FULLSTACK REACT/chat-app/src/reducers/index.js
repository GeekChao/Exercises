import { combineReducers } from 'redux';
import byNameReducer, { getMessages } from './byName'

const reducers = combineReducers({
    byName: byNameReducer,
    names: namesReducer
});

function namesReducer(state = ['France', 'Croatia']){
    return state;
}

export default reducers;

export const getAllTabNames = (state) => {
    return state.names;
}

export const getMsgFromTab = (state, tabName) => {
    const tab = state.byName[tabName];
    return getMessages(tab);
}

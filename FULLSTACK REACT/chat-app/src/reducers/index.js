import { combineReducers } from 'redux';
import { FETCH_TAB_NAMES, FETCH_TAB, ADD_MSG, DELETE_MSG } from '../actions/actionCreator';
import messagesReducer, * as fromMsgList from '../reducers/msgList';

const reducers = combineReducers({
    byName: byNameReducer,
    names: namesReducer
});

function namesReducer(state = [], action){
    switch(action.type){
        case FETCH_TAB_NAMES: 
            return [...action.tabNames];
        default:
            return state;
    }
}

function byNameReducer(state = {}, action){
    switch(action.type){
        case FETCH_TAB:
            return {...state, [action.tab.name]: action.tab};
        case ADD_MSG:
        case DELETE_MSG:
            const tab = state[action.activeTab];
            const newTab = {...tab, messages: messagesReducer(tab.messages, action)};
            return {...state, [newTab.name]: newTab};
        default:
            return state;
    }
}

export default reducers;

export const getAllTabNames = (state) => {
    return state.names;
};

export const getMsgFromTab = (state, tabName) => {
    const tab = state.byName[tabName];
    return tab && fromMsgList.getMsgFromTab(tab.messages);
};

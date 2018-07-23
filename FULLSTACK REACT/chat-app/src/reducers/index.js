import { combineReducers } from 'redux';
import { FETCH_TAB_NAMES, FETCH_TAB, FETCH_TAB_FAIL, FETCH_TAB_NAMES_FAIL, ADD_MSG, DELETE_MSG } from '../actions/actionCreator';
import messagesReducer, * as fromMsgList from '../reducers/msgList';

const reducers = combineReducers({
    byName: byNameReducer,
    names: namesReducer,
    fetchTabStatus: fetchTabStatusReducer
});

function fetchTabStatusReducer(state = true, action){
    switch(action.type){
        case FETCH_TAB_FAIL:
            return false;
        case FETCH_TAB:
            return true;
        default:
            return state;
    }
}

function namesReducer(state = [], action){
    switch(action.type){
        case FETCH_TAB_NAMES: 
            return [...action.tabNames];
        case FETCH_TAB_NAMES_FAIL:
            return null;
        default:
            return state;
    }
}

function byNameReducer(state = {}, action){
    let tab, newTab;
    switch(action.type){
        case FETCH_TAB:
            return {...state, [action.tab.name]: action.tab};
        case ADD_MSG:
        case DELETE_MSG:
            tab = state[action.activeTab];
            newTab = {...tab, messages: messagesReducer(tab.messages, action)};
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

export const getFetchTabStatus = (state) => {
    return state.fetchTabStatus;
};  
import { ADD_MSG, DELETE_MSG } from '../actions/actionCreator';
import { combineReducers } from 'redux';
import messagesReducer from './msgList'

const byNameReducer = combineReducers({
    France: franceTabRecuder,
    Croatia: croatiaTabReducer
});

function updateTab(state, action){
    if(state.name !== action.activeTab) return state;
    switch(action.type){
        case ADD_MSG:
        case DELETE_MSG:
            return {...state, messages: messagesReducer(state.messages, action)};
        default: 
            return state;
    } 
}

function franceTabRecuder(state = {
    id: 1,
    name: 'France',
    messages: messagesReducer(undefined, {})
}, action) {
    return updateTab(state, action);
};

function croatiaTabReducer(state = {
    id: 2,
    name: 'Croatia',
    messages: messagesReducer(undefined, {})
}, action){
    return updateTab(state, action);
};

export default byNameReducer;

export const getMsgFromTab = (state) => {
    return state.messages;
};
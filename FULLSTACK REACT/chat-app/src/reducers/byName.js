import { ADD_MSG, DELETE_MSG } from '../actions/actionCreator';
import { combineReducers } from 'redux';
import messagesReducer from './msgList'

const byNameReducer = combineReducers({
    France: franceTabRecuder,
    Croatia: croatiaTabReducer
});

function franceTabRecuder(state = {
    id: 1,
    name: 'France',
    messages: messagesReducer(undefined, {})
}, action) {
    if(state.name !== action.activeTab) return state;
    switch(action.type){
        case ADD_MSG:
        case DELETE_MSG:
            const newMessages = messagesReducer(state.messages, action);
            return {...state, messages: newMessages};
        default: 
            return state;
    }
};

function croatiaTabReducer(state = {
    id: 2,
    name: 'Croatia',
    messages: messagesReducer(undefined, {})
}, action){
    if(state.name !== action.activeTab) return state;
    switch(action.type){
        case ADD_MSG:
        case DELETE_MSG:
            const newMessages = messagesReducer(state.messages, action);
            return {...state, messages: newMessages};
        default: 
            return state;
    }
};

export default byNameReducer;

export const getMessages = (state) => {
    return state.messages;
};
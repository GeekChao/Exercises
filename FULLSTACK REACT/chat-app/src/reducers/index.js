import { combineReducers } from 'redux';
import { ADD_MSG, DELETE_MSG, OPEN_THREAD } from '../actions/actionCreator';

const reducers = combineReducers({
    activeTab: activeTabReducer,
    threads: threadsReducer
});

function activeTabReducer(state = 'France', action){
    if(action.type === OPEN_THREAD){
        return action.activeTab;
    }
    return state;
};

function messagesReducer(state = [], action){
    switch(action.type){
        case ADD_MSG: 
            let newMsg = {uid: action.uid, text: action.text};
            return state.concat(newMsg);
        case DELETE_MSG:
            let msgIndex = state.findIndex(msg => msg.uid === action.uid);
            return [...state.slice(0, msgIndex), ...state.slice(msgIndex + 1)];
        default:
            return state;
    }
}

function threadsReducer(state = [
    {
        id: 1,
        name: 'France',
        messages: messagesReducer(undefined, {})
    },
    {
        id: 2,
        name: 'Croatia',
        messages: messagesReducer(undefined, {})
    }
], action){
    let threadIndex, newMessages, newThread;
    switch(action.type){
        case ADD_MSG:
        case DELETE_MSG:
            threadIndex = state.findIndex(thread => thread.name === action.activeTab);
            newMessages = messagesReducer(state[threadIndex].messages, action);
            newThread = {...state[threadIndex], messages: newMessages};
            return [...state.slice(0, threadIndex), newThread, ...state.slice(threadIndex + 1)];
        default: 
            return state;
    }
};

export default reducers;
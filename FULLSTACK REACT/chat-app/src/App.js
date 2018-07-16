import React from 'react';
import Forum from './Forum';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const reducers = combineReducers({
    activeThreadId: activeThreadIdReducer,
    threads: threadsReducer
});

function activeThreadIdReducer(state = 1, action){
    if(action.type === 'OPEN_THREAD'){
        return action.activeThreadId;
    }
    return state;
};

function messagesReducer(state = [], action){
    switch(action.type){
        case 'ADD_MSG': 
            let newMsg = {uid: action.uid, text: action.text};
            return state.concat(newMsg);
        case 'DEL_MSG':
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
        case 'ADD_MSG':
        case 'DEL_MSG':
            threadIndex = state.findIndex(thread => thread.id === action.activeThreadId);
            newMessages = messagesReducer(state[threadIndex].messages, action);
            newThread = {...state[threadIndex], messages: newMessages};
            return [...state.slice(0, threadIndex), newThread, ...state.slice(threadIndex + 1)];
        default: 
            return state;
    }
};

const store = createStore(reducers);

const App = () => {
    return(
        <div>
            <h1>World Cup Final Forum</h1>
            <Provider store={store}>
                <Forum />
            </Provider>
        </div>
    );
};

export default App;
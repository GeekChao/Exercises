import React from 'react';
import Data from './data.json';
import Forum from './Forum';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const reducers = combineReducers({
    activeThreadId: activeThreadIdReducer,
    threads: threadsReducer
});

function activeThreadIdReducer(state = Data.activeThreadId, action){
    if(action.type === 'OPEN_THREAD'){
        return action.activeThreadId;
    }
    return state;
};

function threadsReducer(state = Data.tabs, action){
    let threadIndex, newMessages, newThread, msgIndex;
    switch(action.type){
        case 'ADD_MSG':
            threadIndex = state.findIndex(thread => thread.id === action.activeThreadId);
            newMessages = state[threadIndex].messages.concat({uid: action.uid, text: action.text});
            newThread = {...state[threadIndex], messages: newMessages};
            return [...state.slice(0, threadIndex), newThread, ...state.slice(threadIndex + 1)];
        case 'DEL_MSG':
            threadIndex = state.findIndex(thread => thread.id === action.activeThreadId);
            msgIndex = state[threadIndex].messages.findIndex(msg => msg.uid === action.uid);
            newMessages = [...state[threadIndex].messages.slice(0, msgIndex), ...state[threadIndex].messages.slice(msgIndex + 1)];
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
            <h1>{Data.title}</h1>
            <Provider store={store}>
                <Forum />
            </Provider>
        </div>
    );
};

export default App;
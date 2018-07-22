import { ADD_MSG, DELETE_MSG, FETCH_TAB } from '../actions/actionCreator';
import * as api from '../api';

function messagesReducer(state = {}, action){
    switch(action.type){
        case ADD_MSG: 
            let newMsg = {uid: action.uid, text: action.text};
            api.addMsgFromTab(action.activeTab, newMsg);
            return {...state, [action.uid]: newMsg};
        case DELETE_MSG:
            let newState = {...state};
            delete newState[action.uid];
            api.deleteMsgFromTab(action.activeTab, action.uid);
            return newState;
        case FETCH_TAB:
            return action.tab.messages;
        default:
            return state;
    }
};

export default messagesReducer;

export const getMsgFromTab = (state) => {
    return state;
};
import { ADD_MSG, DELETE_MSG } from '../actions/actionCreator';

function messagesReducer(state = {}, action){
    switch(action.type){
        case ADD_MSG: 
            let newMsg = {uid: action.uid, text: action.text};
            return {...state, [action.uid]: newMsg};
        case DELETE_MSG:
            let newState = {...state};
            delete newState[action.uid];
            return newState;
        default:
            return state;
    }
};

export default messagesReducer;
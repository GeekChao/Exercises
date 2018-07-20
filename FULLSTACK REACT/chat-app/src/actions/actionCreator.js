import { v4 } from 'uuid';

export const ADD_MSG = 'ADD_MSG';
export const addMsg = (activeThreadId, text) => ({
    type: ADD_MSG,
    activeThreadId,
    uid: v4().slice(0, 6),
    text
});

export const DELETE_MSG = 'DEL_MSG';
export const deleteMsg = (activeThreadId, uid) => ({
    type: DELETE_MSG,
    activeThreadId,
    uid
});

export const OPEN_THREAD = 'OPEN_THREAD';
export const openThread = (activeThreadId) => ({
    type: OPEN_THREAD,
    activeThreadId
});
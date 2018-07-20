import { v4 } from 'uuid';

export const ADD_MSG = 'ADD_MSG';
export const addMsg = (activeTab, text) => ({
    type: ADD_MSG,
    activeTab,
    uid: v4().slice(0, 6),
    text
});

export const DELETE_MSG = 'DEL_MSG';
export const deleteMsg = (activeTab, uid) => ({
    type: DELETE_MSG,
    activeTab,
    uid
});

export const OPEN_THREAD = 'OPEN_THREAD';
export const openThread = (activeTab) => ({
    type: OPEN_THREAD,
    activeTab
});
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

export const FETCH_TAB_NAMES = 'FETCH_TAB_NAMES';
export const fetchTabNames = (tabNames) => ({
    type: FETCH_TAB_NAMES,
    tabNames
});

export const FETCH_TAB = 'FETCH_TAB';
export const fetchTab = (tab) => ({
    type: FETCH_TAB,
    tab
});
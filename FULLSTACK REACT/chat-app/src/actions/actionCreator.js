import { v4 } from 'uuid';
import * as api from '../api';
import { getAllTabNames } from '../reducers';

export const ADD_MSG = 'ADD_MSG';
export const addMsg = (activeTab, text) => (dispatch) =>  {//optimistic update
    const uid = v4().slice(0, 6);
    dispatch({
        type: ADD_MSG,
        activeTab,
        uid,
        text
    });

    api.addMsgFromTab(activeTab, {uid, text}).then(() => console.log('Add Success'));
}

export const DELETE_MSG = 'DEL_MSG';
export const deleteMsg = (activeTab, uid) => (dispatch) => {
    dispatch({
        type: DELETE_MSG,
        activeTab,
        uid
    });

    api.deleteMsgFromTab(activeTab, uid).then(() => console.log('Delete Success'));
}

export const FETCH_TAB_NAMES = 'FETCH_TAB_NAMES';
export const FETCH_TAB_NAMES_FAIL = 'FETCH_TAB_NAMES_FAIL';
export const fetchTabNames = () => api.fetchTabNames().then(
                tabNames => ({
                    type: FETCH_TAB_NAMES,
                    tabNames
                }),
                error => ({
                    type: FETCH_TAB_NAMES_FAIL,
                    error
                })
            );

export const FETCH_TAB = 'FETCH_TAB';
export const FETCH_TAB_FAIL = 'FETCH_TAB_FAIL';
export const fetchTabByName = (activeTab) => (dispatch, getState) => {
    if(getAllTabNames(getState()).length === 0){
        dispatch(fetchTabNames());
    }

    return api.fetchTabByName(activeTab).then(
                tab => dispatch({
                    type: FETCH_TAB,
                    tab
                }),
                error => dispatch({
                    type: FETCH_TAB_FAIL,
                    error
                })
            );
};
import {connect} from 'react-redux';
import Thread from './Thread';
import * as action from '../actions/actionCreator';
import { getMsgFromTab } from '../reducers';

const mapStateToThreadProps = (state, { activeTab, fetchTabStatus, loadTabStatus }) => ({
    messages: getMsgFromTab(state, activeTab),
    activeTab,
    fetchTabStatus,
    loadTabStatus
});

const mapDispatchToThreadProps = (dispatch, { handleFailFetchByName }) => ({
    dispatch,
    handleFailFetchByName
});

const mergeThreadProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    handleSubmit: (text) => dispatchProps.dispatch(action.addMsg(stateProps.activeTab, text)),
    handleDelte: (id) => dispatchProps.dispatch(action.deleteMsg(stateProps.activeTab, id))
});

const ThreadDisplay = connect(
    mapStateToThreadProps,
    mapDispatchToThreadProps,
    mergeThreadProps
)(Thread);

export default ThreadDisplay;
import {connect} from 'react-redux';
import Thread from './Thread';
import * as action from '../actions/actionCreator';

const mapStateToThreadProps = (state) => ({
    messages: state.threads.find(thread => thread.name === state.activeTab).messages,
    activeTab: state.activeTab
});

const mapDispatchToThreadProps = (dispatch) => ({
    dispatch
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
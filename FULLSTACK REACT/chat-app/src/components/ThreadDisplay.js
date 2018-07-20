import {connect} from 'react-redux';
import Thread from './Thread';
import * as action from '../actions/actionCreator';

const mapStateToThreadProps = (state) => ({
    messages: state.threads.find(thread => thread.id === state.activeThreadId).messages,
    activeThreadId: state.activeThreadId
});

const mapDispatchToThreadProps = (dispatch) => ({
    dispatch
});

const mergeThreadProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    handleSubmit: (text) => dispatchProps.dispatch(action.addMsg(stateProps.activeThreadId, text)),
    handleDelte: (id) => dispatchProps.dispatch(action.deleteMsg(stateProps.activeThreadId, id))
});

const ThreadDisplay = connect(
    mapStateToThreadProps,
    mapDispatchToThreadProps,
    mergeThreadProps
)(Thread);

export default ThreadDisplay;
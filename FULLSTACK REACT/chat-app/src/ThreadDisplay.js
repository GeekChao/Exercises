import {connect} from 'react-redux';
import Thread from './Thread';
import actionCreator from './actionCreator';
import uuid from 'uuid';

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
    handleSubmit: (text) => dispatchProps.dispatch(actionCreator.addMsg('ADD_MSG', stateProps.activeThreadId,  uuid.v4().slice(0, 6), text)),
    handleDelte: (id) => dispatchProps.dispatch(actionCreator.deleteMsg('DEL_MSG', stateProps.activeThreadId, id))
});

const ThreadDisplay = connect(
    mapStateToThreadProps,
    mapDispatchToThreadProps,
    mergeThreadProps
)(Thread);

export default ThreadDisplay;
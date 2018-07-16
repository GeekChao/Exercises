import {connect} from 'react-redux';
import Thread from './Thread';
import actionCreator from './actionCreator';
import uuid from 'uuid';

const mapStateToThreadPrps = (state) => ({
    messages: state.threads.find(thread => thread.id === state.activeThreadId).messages,
    activeThreadId: state.activeThreadId
});

const mapDispatchToThreadProps = (dispatch) => ({
    dispatch
});

const mergeThreadProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    handleSubmit: (text) => dispatchProps.dispatch(actionCreator('ADD_MSG', stateProps.activeThreadId,  uuid.v4().slice(0, 5), text)),
    handleDelte: (id) => dispatchProps.dispatch(actionCreator('DEL_MSG', stateProps.activeThreadId, id))
});

const ThreadDisplay = connect(
    mapStateToThreadPrps,
    mapDispatchToThreadProps,
    mergeThreadProps
)(Thread);

export default ThreadDisplay;
import {connect} from 'react-redux';
import TabList from './TabList';
import actionCreator from './actionCreator';

const mapStateToTabList = (state) => ({
    tabs: state.threads,
    activeThreadId: state.activeThreadId
}); 

const mapDispatchToTabList = (dispatch) => ({
    handleClick: (activeThreadId) => dispatch(actionCreator.openThread('OPEN_THREAD', activeThreadId))
});

const ThreadTabList = connect(
    mapStateToTabList,
    mapDispatchToTabList
)(TabList);

export default ThreadTabList;
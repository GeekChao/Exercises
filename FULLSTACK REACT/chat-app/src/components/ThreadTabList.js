import {connect} from 'react-redux';
import TabList from './TabList';
import * as action from '../actions/actionCreator';

const mapStateToTabList = (state) => ({
    tabs: state.threads,
    activeThreadId: state.activeThreadId
}); 

const mapDispatchToTabList = (dispatch) => ({
    handleClick: (activeThreadId) => dispatch(action.openThread(activeThreadId))
});

const ThreadTabList = connect(
    mapStateToTabList,
    mapDispatchToTabList
)(TabList);

export default ThreadTabList;
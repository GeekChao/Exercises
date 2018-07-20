import {connect} from 'react-redux';
import TabList from './TabList';

const mapStateToTabList = (state) => ({
    tabs: state.threads,
}); 

const mapDispatchToTabList = (dispatch) => ({
    dispatch
});

const ThreadTabList = connect(
    mapStateToTabList,
    mapDispatchToTabList
)(TabList);

export default ThreadTabList;
import {connect} from 'react-redux';
import TabList from './TabList';
import { getAllTabNames } from '../reducers';

const mapStateToTabList = (state) => ({
    tabNames: getAllTabNames(state),
}); 

const ThreadTabList = connect(
    mapStateToTabList,
)(TabList);

export default ThreadTabList;
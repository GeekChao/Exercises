import {connect} from 'react-redux';
import TabList from './TabList';
import * as action from '../actions/actionCreator';
import { withRouter } from 'react-router-dom';
import React from 'react';

const mapStateToTabList = (state, { match }) => ({
    tabs: state.threads,
    activeTab: match.params.activeTab || state.activeTab
}); 

const mapDispatchToTabList = (dispatch) => ({
    dispatch
});

class ThreadTabList extends React.Component{
    componentDidUpdate(preProps){
        let { activeTab, dispatch } = this.props
        if(preProps.activeTab !== activeTab){
            dispatch(action.openThread(activeTab));
        }
    }

    render(){
        let { tabs, activeTab } = this.props;
        return(
            <TabList
                tabs={tabs}
                activeTab={activeTab}
            />
        );
    }
}

ThreadTabList = withRouter(connect(
    mapStateToTabList,
    mapDispatchToTabList
)(ThreadTabList));

export default ThreadTabList;
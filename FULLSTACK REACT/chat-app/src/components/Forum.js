import React from 'react';
import ThreadDisplay from './ThreadDisplay';
import ThreadTabList from './ThreadTabList';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as action from '../actions/actionCreator';
import { getMsgFromTab, getAllTabNames, getFetchTabStatus } from '../reducers';
import './Forum.css';

class Forum extends React.Component{

    static propTypes = {
        activeTab: PropTypes.string
    }

    componentDidMount(){
        const { messages, dispatch, activeTab } = this.props;
        
        if(activeTab && messages === undefined){
            dispatch(action.fetchTabByName(activeTab));
        }else{
            dispatch(action.fetchTabNames());
        }
    }

    componentDidUpdate(preProps){
        const { dispatch, activeTab } = this.props;
        if(activeTab !== preProps.activeTab){
            dispatch(action.fetchTabByName(activeTab));
        }
    }

    handleFailFetchByName = (activeTab) => {
        this.props.dispatch(action.fetchTabByName(activeTab));
    }

    handleFetchTabNames = () => {
        this.props.dispatch(action.fetchTabNames());
    };

    render(){
        const { location, tabNames, fetchTabStatus, loadTabStatus, activeTab} = this.props;

        if(tabNames === null) return <button onClick={this.handleFetchTabNames}>Fail, retry?</button>;
        
        if(tabNames.length === 0) return <h1>loading....</h1>;

        return (
            <div className='Forum'>
                <ThreadTabList location={location}/>
                {activeTab && <ThreadDisplay 
                                    activeTab={activeTab} 
                                    fetchTabStatus={fetchTabStatus}
                                    loadTabStatus={loadTabStatus}
                                    handleFailFetchByName={(activeTab) => this.handleFailFetchByName(activeTab)}
                              />}
            </div>
        );
    }
};

const mapStateToForumProps = (state, ownProps) => {
    const { activeTab } = ownProps.match.params;
    return {
        tabNames: getAllTabNames(state),
        fetchTabStatus: getFetchTabStatus(state),
        loadTabStatus: getMsgFromTab(state, activeTab),
        messages: getMsgFromTab(state, activeTab),
        activeTab
    }
};

export default withRouter(connect(mapStateToForumProps)(Forum));
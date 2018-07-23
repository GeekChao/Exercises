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
        const { state, dispatch } = this.props;
        const { activeTab } = this.props.match.params;
        
        if(activeTab && getMsgFromTab(state, activeTab) === undefined){
            dispatch(action.fetchTabByName(activeTab));
        }else{
            dispatch(action.fetchTabNames());
        }
    }

    componentDidUpdate(preProps){
        const { dispatch } = this.props;
        const { activeTab } = this.props.match.params;
        if(activeTab !== preProps.match.params.activeTab){
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
        const { activeTab } = this.props.match.params;
        const { location, state} = this.props;

        if(getAllTabNames(state) === null) return <button onClick={this.handleFetchTabNames}>Fail, retry?</button>;
        
        if(getAllTabNames(state).length === 0) return <h1>loading....</h1>;

        const fetchTabStatus = getFetchTabStatus(state);
        const loadTabStatus = getMsgFromTab(state, activeTab);

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

const mapStateToForumProps = (state) => ({
    state
});

export default withRouter(connect(mapStateToForumProps)(Forum));
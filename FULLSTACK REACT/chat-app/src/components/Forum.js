import React from 'react';
import ThreadDisplay from './ThreadDisplay';
import ThreadTabList from './ThreadTabList';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../api';
import { connect } from 'react-redux';
import * as action from '../actions/actionCreator';
import { getMsgFromTab } from '../reducers';
import './Forum.css';

class Forum extends React.Component{

    static propTypes = {
        activeTab: PropTypes.string
    }

    state = {
        loadding: true
    }

    componentDidMount(){
        const { dispatch, state } = this.props;
        const { activeTab } = this.props.match.params;

        api.fetchTabNames().then(
            tabNames => {
                dispatch(action.fetchTabNames(tabNames));
                this.setState({loadding: false});
            });

        if(activeTab && getMsgFromTab(state, activeTab) === undefined){
            this.setState({loadding: true});
            api.fetchByName(activeTab).then(tab => {
                dispatch(action.fetchTab(tab));
                this.setState({loadding: false});
            });
        }
    }

    componentDidUpdate(preProps){
        const { activeTab } = this.props.match.params;
        if(activeTab !== preProps.match.params.activeTab){
            api.fetchByName(activeTab).then(tab => {
                this.props.dispatch(action.fetchTab(tab));
            });
        }
    }

    render(){
        if(this.state.loadding) return <h1>loading....</h1>;
        
        const { activeTab } = this.props.match.params;
        const { location} = this.props;

        return (
            <div className='Forum'>
                <ThreadTabList location={location}/>
                {activeTab && <ThreadDisplay activeTab={activeTab}/>}
            </div>
        );
    }
};

const mapStateToForumProps = (state) => ({
    state
});

export default withRouter(connect(mapStateToForumProps)(Forum));
import React from 'react';
import ThreadDisplay from './ThreadDisplay';
import ThreadTabList from './ThreadTabList';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Forum.css'

class Forum extends React.Component{

    static propTypes = {
        activeTab: PropTypes.string
    }

    render(){
        const { activeTab } = this.props.match.params;
        const { location } = this.props;
        return (
            <div className='Forum'>
                <ThreadTabList location={location}/>
                {activeTab && <ThreadDisplay activeTab={activeTab}/>}
            </div>
        );
    }
};

export default withRouter(Forum);
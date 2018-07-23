import React from 'react';
import PropTypes from 'prop-types';
import TextViewSubmit from './TextViewSubmit';
import MessageList from './MessageList';

const Thread = (props) => {
    let { fetchTabStatus, loadTabStatus, handleFailFetchByName, activeTab } = props;

    if(fetchTabStatus === false){
        return <button onClick={() => handleFailFetchByName(activeTab)}>Fail, retry?</button>;
    }
    
    if(loadTabStatus === undefined) {
        return <h1>loading....</h1>;
    } 

    return (
        <div style={{fontSize: '14px'}}>
            <MessageList  messages={props.messages} handleDelte={props.handleDelte}/>
            <TextViewSubmit handleSubmit={props.handleSubmit}/>
        </div>
    );
};

Thread.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleDelte: PropTypes.func.isRequired,
    handleFailFetchByName: PropTypes.func.isRequired,
    messages: PropTypes.shape({
        uid: PropTypes.object
    })
};

export default Thread;
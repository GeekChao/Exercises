import React from 'react';
import PropTypes from 'prop-types';
import './MessageList.css';

const MessageList = (props) => {
    return (
        <ul className='MessageList'>
            {props.messages.map((msg, i) => 
                <li 
                    key={i}
                    onClick={() => props.handleDelte(msg.uid)}
                >
                    {msg.text}<span className='UserId'>{` @${msg.uid}`}</span>
                </li>
            )}
        </ul>
    );
};

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    handleDelte: PropTypes.func.isRequired,
};

export default MessageList;
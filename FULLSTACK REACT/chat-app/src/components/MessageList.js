import React from 'react';
import PropTypes from 'prop-types';
import './MessageList.css';

const MessageList = (props) => {
    return (
        <ul className='MessageList'>
            {Object.keys(props.messages).map((uid, i) => {
                    const msg = props.messages[uid];
                    return (                    
                        <li 
                            key={i}
                            onClick={() => props.handleDelte(msg.uid)}
                        >
                            {msg.text}<span className='UserId'>{` @${msg.uid}`}</span>
                        </li>
                    );
                }
            )}
        </ul>
    );
};

MessageList.propTypes = {
    messages: PropTypes.shape({
        uid: PropTypes.object
    }),
    handleDelte: PropTypes.func.isRequired,
};

export default MessageList;
import React from 'react';
import PropTypes from 'prop-types';

const MessageList = (props) => {
    return (
        <div>
            <ul>
                {props.messages.map((msg, i) => 
                    <li 
                        key={i}
                        onClick={() => props.handleDelte(msg.uid)}
                    >
                        {`${msg.text}@${msg.uid}`}
                    </li>
                )}
            </ul>
        </div>
    );
};

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    handleDelte: PropTypes.func.isRequired,
};

export default MessageList;
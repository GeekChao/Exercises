import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
    let {active, handleClick, name} = props;
    let style = {};
    active ? style.color = 'red' : style.color = 'black';
    return (
        <button style={style} onClick={handleClick}>{name}</button>
    );
};

Tab.propTypes = {
    handleClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};

export default Tab;
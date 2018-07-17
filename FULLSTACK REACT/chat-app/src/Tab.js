import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';

const Tab = (props) => {
    let {active, handleClick, name} = props;
    let selected = active ? 'Selected': '';
    return (
        <a className={`Tab ${selected}`} href='#' onClick={handleClick}>{name}</a>
    );
};

Tab.propTypes = {
    handleClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};

export default Tab;
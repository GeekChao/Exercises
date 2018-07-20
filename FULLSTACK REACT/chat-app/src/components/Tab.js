import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Tab.css';

const Tab = (props) => {
    let {active, name} = props;
    let selected = active ? 'Selected': '';
    return (
        <Link to={`${name}`} className={`Tab ${selected}`}>{name}</Link>
    );
};

Tab.propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
};

export default Tab;
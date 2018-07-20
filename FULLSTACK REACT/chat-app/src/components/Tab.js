import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Tab.css';

const Tab = (props) => {
    return (
        <NavLink 
            to={`/${props.name}`} 
            className='Tab' 
            activeClassName='Selected'>
                {props.name}
        </NavLink>
    );
};

Tab.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Tab;
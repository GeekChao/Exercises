import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import './TabList.css'

const TabList = (props) => {
    return (
        <nav className='TabList'>
            {props.tabs.map(
                (tab, i) => <Tab 
                                key={i} 
                                name={tab.name} 
                                active={tab.id === props.activeThreadId} 
                                handleClick={() => props.handleClick(tab.id)}
                            />
            )}
        </nav>
    );
};

TabList.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.object),
    handleClick: PropTypes.func.isRequired,
    activeThreadId: PropTypes.number.isRequired
};

export default TabList;
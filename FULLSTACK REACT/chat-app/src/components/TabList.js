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
                                active={tab.name === props.activeTab} 
                            />
            )}
        </nav>
    );
};

TabList.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.object),
    activeTab: PropTypes.string.isRequired
};

export default TabList;
import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import './TabList.css'

const TabList = (props) => {
    return (
        <nav className='TabList'>
            <ul>
                {props.tabs.map(
                    (tab, i) => <li key={i}>
                                    <Tab name={tab.name}/>
                                </li>
                )}
            </ul>
        </nav>
    );
};

TabList.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.object),
};

export default TabList;
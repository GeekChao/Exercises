import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import './TabList.css'

const TabList = (props) => {
    return (
        <nav className='TabList'>
            <ul>
                {props.tabNames.map(
                    (tabName, i) => <li key={i}>
                                    <Tab name={tabName}/>
                                </li>
                )}
            </ul>
        </nav>
    );
};

TabList.propTypes = {
    tabNames: PropTypes.array.isRequired,
};

export default TabList;
import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const TabList = (props) => {
    return (
        <div>
            {props.tabs.map(
                (tab, i) => <Tab 
                                key={i} 
                                name={tab.name} 
                                active={tab.id === props.activeThreadId} 
                                handleClick={() => props.handleClick(tab.id)}
                            />
            )}
        </div>
    );
};

TabList.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.object),
    handleClick: PropTypes.func.isRequired,
    activeThreadId: PropTypes.number.isRequired
};

export default TabList;
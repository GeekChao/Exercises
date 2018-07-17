import React from 'react';
import ThreadDisplay from './ThreadDisplay';
import ThreadTabList from './ThreadTabList';
import './Forum.css'

const Forum = () => {
    return (
        <div className='Forum'>
            <ThreadTabList />
            <ThreadDisplay />
        </div>
    );
};

export default Forum;
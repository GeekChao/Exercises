import React from 'react';
import ThreadDisplay from './ThreadDisplay';
import ThreadTabList from './ThreadTabList';

const Forum = () => {
    return (
        <div>
            <ThreadTabList />
            <ThreadDisplay />
        </div>
    );
};

export default Forum;
import React from 'react';
import TimerForm from './TimerForm';

const AddTimerForm = (props) => {
    return <TimerForm handleAddClick={props.handleAddClick} handleCreateTF={props.handleCreateTF} />
};

export default AddTimerForm;
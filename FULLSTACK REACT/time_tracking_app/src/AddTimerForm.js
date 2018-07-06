import React from 'react';
import TimerForm from './TimerForm';

const AddTimerForm = (props) => {
    return <TimerForm type='Add' handleAddClick={props.handleAddClick} handleCreateTF={props.handleCreateTF} />
};

export default AddTimerForm;
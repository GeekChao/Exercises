import React from 'react';
import TimerForm from './TimerForm';

const EditTimerForm = (props) => {
    return <TimerForm timer={props.timer} type='Edit' handleEditClick={props.handleEditClick} handleUpdateTF={props.handleUpdateTF}/>;
};  

export default EditTimerForm;
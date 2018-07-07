import React from 'react';
import TimerForm from './TimerForm';

const EditTimerForm = (props) => {
    return <TimerForm 
        id={props.id}
        title={props.title}
        project={props.project}
        handleEditClick={props.handleEditClick} 
        handleUpdateTF={props.handleUpdateTF}
    />;
};  

export default EditTimerForm;
import React from 'react';
import EditableTimer from './EditableTimer';

const EditableTimerList = (props) => {
    return props.timers.map(timer => <EditableTimer timer={timer} key={timer.id} handleDeleteTF={props.handleDeleteTF} handleUpdateTF={props.handleUpdateTF}/>);
}

export default EditableTimerList;
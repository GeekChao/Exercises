import React, {Component} from 'react';
import EditTimerForm from './EditTimerForm';
import Timer from './Timer';

class EditableTimer extends Component{
    state = {
        isEditBtnClicked: false,
    };

    handleEditClick = () => {
        this.setState({isEditBtnClicked: !this.state.isEditBtnClicked});
    };

    render() {
        return (
            <div>
                 {this.state.isEditBtnClicked ? 
                    <EditTimerForm timer={this.props.timer} handleEditClick={this.handleEditClick} handleUpdateTF={this.props.handleUpdateTF}/> : 
                    <Timer timer={this.props.timer} handleEditClick={this.handleEditClick} handleDeleteTF={this.props.handleDeleteTF} handleUpdateTF={this.props.handleUpdateTF}/>}
            </div>
        );
    }
}

export default EditableTimer;
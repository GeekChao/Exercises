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
                    <EditTimerForm
                        id={this.props.timer.id} 
                        title={this.props.timer.title} 
                        project={this.props.timer.project}
                        handleEditClick={this.handleEditClick} 
                        handleUpdateTF={this.props.handleUpdateTF}
                    /> : 
                    <Timer
                        title={this.props.timer.title} 
                        project={this.props.timer.project} 
                        time={this.props.timer.time}
                        id={this.props.timer.id} 
                        handleEditClick={this.handleEditClick} 
                        handleDeleteTF={this.props.handleDeleteTF} handleUpdateTF={this.props.handleUpdateTF}
                    />
                 }
            </div>
        );
    }
}

export default EditableTimer;
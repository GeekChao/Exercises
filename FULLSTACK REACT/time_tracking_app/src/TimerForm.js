import React, {Component} from 'react';
import './TimerForm.css';

class TimerForm extends Component{
    state = {
        title: this.props.title || '',
        project: this.props.project || ''
    };

    handleCancelBtnClick = () => {
        this.props.id ? this.props.handleEditClick() : this.props.handleAddClick();
    }

    handleChange = (evt) => {
        this.setState({
            [`${evt.target.name}`]: evt.target.value
        });
    };

    handleSubmitBtnClick = (timer) => {
        this.props.id ? this.props.handleUpdateTF(this.props.id, timer) : this.props.handleCreateTF(timer);
        this.handleCancelBtnClick();
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
    }

    render() {
        let submit = this.props.id ? 'Update' : 'Create';
        return (
            <div className='timertf'>
                <form onSubmit={this.handleSubmit}>
                    <div className='timertf_field'>
                        <label htmlFor='title'>Title</label><br />
                        <input id='title' name='title' value={this.state.title} type='text' onChange={this.handleChange}></input>
                    </div>
                    <div className='timertf_field'>
                        <label htmlFor='project'>Project</label><br />
                        <input id='project' name='project' value={this.state.project} type='text' onChange={this.handleChange}></input>
                    </div>
                    <div className='timertf_btn'>
                        <button className='submit' onClick={() => this.handleSubmitBtnClick(this.state)}>{submit}</button>
                        <button className='cancel' onClick={this.handleCancelBtnClick}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    };
}

export default TimerForm;
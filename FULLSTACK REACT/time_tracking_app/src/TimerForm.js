import React, {Component} from 'react';
import './TimerForm.css';

class TimerForm extends Component{
    state = {
        title: '',
        project: ''
    };

    componentDidMount() {
        if(this.props.type === 'Edit'){
            this.setState({
                title: this.props.timer.title,
                project: this.props.timer.project
            });
        }
    }

    handleCancelBtnClick = () => {
        this.props.type === 'Edit' ? this.props.handleEditClick() : this.props.handleAddClick();
    }

    handleInput = (evt) => {
        this.setState({
            [`${evt.target.name}`]: evt.target.value
        });
    };

    handleSubmitBtnClick = (timer) => {
        this.props.type === 'Edit' ? this.props.handleUpdateTF({...this.props.timer, ...timer}) : this.props.handleCreateTF(timer);
        this.handleCancelBtnClick();
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
    }

    render() {
        let submit = this.props.type === 'Edit' ? 'Update' : 'Create';
        return (
            <div className='timertf'>
                <form onSubmit={this.handleSubmit}>
                    <div className='timertf_field'>
                        <label htmlFor='title'>Title</label><br />
                        <input id='title' name='title' value={this.state.title} type='text' onInput={this.handleInput}></input>
                    </div>
                    <div className='timertf_field'>
                        <label htmlFor='project'>Project</label><br />
                        <input id='project' name='project' value={this.state.project} type='text' onInput={this.handleInput}></input>
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
import React, {Component} from 'react';
import AddTimerForm from './AddTimerForm';

const btnStyle = {
    display: 'inline-block',
    padding: '.2rem .7rem .3rem',
    background: 'hsla(0, 0%, 100%, .1)',
    color: 'rgba(0, 0, 0, .6)',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: '1px solid rgba(0, 0, 0, .1)',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, .2)',
    outline: 'none'
};

const Add = (props) => {
    return <button style={btnStyle} onClick={props.handleAddClick}>+</button>
}

class ToggleableTimeForm extends Component{
    state = {
        isAddBtnClicked: false
    };

    handleAddClick = () => {
        this.setState({
            isAddBtnClicked: !this.state.isAddBtnClicked
        });
    }

    render(){
        return (
            <div>
                {this.state.isAddBtnClicked ? 
                    <AddTimerForm handleAddClick={this.handleAddClick} handleCreateTF={this.props.handleCreateTF} /> : 
                    <Add handleAddClick={this.handleAddClick} />}
            </div>
        );
    }
}

export default ToggleableTimeForm;
import React from 'react';
import PropTypes from 'prop-types';
import './TextViewSubmit.css';

class TextViewSubmit extends React.Component{
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
    }

    state = {
        message: ''
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state.message);
        this.setState({message: ''});
    }

    hanldeChange = (evt) => {
        this.setState({[`${evt.target.name}`]: evt.target.value});
    }

    render(){
        return(
            <div className='TextViewSubmit'>
                <input type='text' name='message' value={this.state.message} onChange={this.hanldeChange} />
                <button type='submit' disabled={!(this.state.message.length > 0)} onClick={this.handleSubmit}>Submit</button> 
            </div>
        );
    }
}

export default TextViewSubmit;
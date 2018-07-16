import React from 'react';
import PropTypes from 'prop-types';

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
            <div>
                <input type='text' name='message' value={this.state.message} onChange={this.hanldeChange} />
                <input type='submit' onClick={this.handleSubmit} />
            </div>
        );
    }
}

export default TextViewSubmit;
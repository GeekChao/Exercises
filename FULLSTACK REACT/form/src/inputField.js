import React from 'react';
import PropTypes from 'prop-types';

class InputField extends React.Component{
    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        error: PropTypes.string,
        placeholder: PropTypes.string,
        handleInputChange: PropTypes.func.isRequired,
        validate: PropTypes.func,
    };

    handleChange = (evt) => {
        const {name, value} = evt.target;
        const error = this.props.validate ? this.props.validate(value): false;
        this.props.handleInputChange(name, value, error);
    };

    render(){
        return (
            <div>
                <input 
                    name={this.props.name} 
                    value={this.props.value} 
                    placeholder={this.props.placeholder} 
                    onChange={this.handleChange}
                />
                <span>{this.props.error}</span>
            </div>
        );
    }
}

export default InputField;

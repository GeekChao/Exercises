import React, {Component} from 'react';
import InputField from './inputField';
import PropTypes from 'prop-types';
import CourseSelect from './courseSelect';
import isEmail from 'validator/lib/isEmail';

class Form extends Component{
    static propTypes = {
        title: PropTypes.string,
        handleSubmit: PropTypes.func.isRequired,
        saveStatus: PropTypes.string.isRequired,
    };

    state = {
        fields: {
            name: '',
            email: '',
            department: '',
            course: ''
        },
        fieldsErr: {},
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        if(this.validate()) return;
        this.props.handleSubmit(this.state.fields);
        this.setState({
            fields: {
                name: '',
                email: '',
                department: '',
                course: ''
            },
            fieldsErr: {},
        });
    };

    handleInputChange = (name, value, error) => {
        let fields = {...this.state.fields, [`${name}`]: value};
        let fieldsErr = {...this.state.fieldsErr, [`${name}`]: error};
        this.setState({fields, fieldsErr});
    }

    handleSelectChange = (name, value) => {
        let fields = {...this.state.fields, [`${name}`]: value};
        this.setState({fields});
    }

    validate = () => {
        let {fields, fieldsErr} = this.state;
        if(!fields.name) return true;
        if(!fields.email) return true;
        if(!fields.department) return true;
        if(!fields.course) return true;
        let errorMsg = Object.keys(fieldsErr).filter(k => fieldsErr[k]);
        if(errorMsg.length) return true;

        return false;
    }

    render(){
        return(
            <section>
                <h1>{this.props.title}</h1>
                <form onSubmit={this.handleSubmit}>
                    <InputField 
                        name='name' 
                        placeholder='name'
                        value={this.state.fields.name}
                        error={this.state.fieldsErr['name'] || ''}
                        validate={val => val !== '' ? false: 'Name Required'}
                        handleInputChange={(name, value, error) => this.handleInputChange(name, value, error)}
                    />
                    <InputField 
                        name='email' 
                        placeholder='email'
                        value={this.state.fields.email}
                        error={this.state.fieldsErr['email'] || ''}
                        validate={val => isEmail(val) ? false: 'Invalid Email'}
                        handleInputChange={(name, value, error) => this.handleInputChange(name, value, error)} 
                    />
                    <CourseSelect
                        handleSelectChange={(name,value) => this.handleSelectChange(name, value)}
                        course={this.state.fields.course}
                        department={this.state.fields.department}
                    />
                    {{
                        'Ready': <input type='submit' value='Submit' disabled={this.validate()} />,
                        'Saving': <input type='submit' value='Saving' disabled />,
                        'Error': <input type='submit' value='Save Failed - Retry?' />                        
                    }[this.props.saveStatus]}
                </form>
            </section>
        );
    }
}

export default Form;

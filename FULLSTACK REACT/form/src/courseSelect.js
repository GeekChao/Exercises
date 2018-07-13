import React from 'react';
import PropTypes from 'prop-types';
import core from './api/core.json';
import electives from './api/electives.json';

const Courses = {
    core,
    electives
};

class CourseSelect extends React.Component{
    static propTypes = {
        handleSelectChange: PropTypes.func.isRequired,
        course: PropTypes.string,
        department: PropTypes.string.isRequired
    };

    state = {
        loading: false,
        courses: []
    };

    fetch = department => {
        this.setState({loading: true, courses: []});
        apiClient(department).then(courses => this.setState({loading: false, courses: courses}));
    };

    onSelectDepartment = evt => {
        let department = evt.target.value;
        let name = evt.target.name;
        this.props.handleSelectChange(name, department);
        if(department) this.fetch(department);
    }

    onSelectCourse = evt => {
        let {name, value} = evt.target;
        this.props.handleSelectChange(name, value);
    };

    renderCourseSelect = () => {
        if(this.state.loading){
            return <img alt='loading' src='../public/img/loading.gif'/>;
        }
        if(!this.props.department || !this.state.courses.length){
            return;
        }
        return (
            <select
                name='course'
                value={this.props.course}
                onChange={this.onSelectCourse}
            >
                {[
                    <option key='-1' value=''>Which Course?</option>,
                    ...this.state.courses.map((course, i) => <option key={i} value={course}>{course}</option>)
                ]}
            </select>
        );
    }

    render(){
        return(
            <div>
                <select 
                    name='department' 
                    value={this.props.department} 
                    onChange={this.onSelectDepartment}
                >
                    <option value=''>Which Department ?</option>
                    <option value='core'>NodeSchool: Core</option>
                    <option value='electives'>NodeSchool: Electives</option>
                </select>
                <br />
                {this.renderCourseSelect()}
            </div>
        );
    };
}

function apiClient(department){
    return {
        then: cb => {
            setTimeout(() => {
                cb(Courses[department]);
            }, 1000);
        }
    };
}

export default CourseSelect;
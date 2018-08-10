import React from 'react';
import PropTypes from 'prop-types';

class KWGenerate extends React.Component{
    static propTypes = {
        categories: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            category: PropTypes.string
        })),
        handleCreateKW: PropTypes.func
    }; 

    state = {
        keyword: '',
        category_id: '-1',
    };

    handleChange = (evt) => {
        this.setState({[`${evt.target.name}`]: evt.target.value});
    };

    handleCreateKW = (evt) => {
        evt.preventDefault();
        const {keyword, category_id} = this.state;
        this.setState({keyword: '', category_id: '-1'});
        this.props.handleCreateKW(keyword, category_id);
    };

    validate = () => {
        const {keyword, category_id} = this.state;

        if(!keyword) return false;
        if(category_id === '-1') return false;

        return true;
    };

    render(){
        const {keyword, category_id} = this.state;
        const {categories} = this.props;

        return(
            <div>
                <span>New Keyword: </span>
                <input type='text' name='keyword' value={keyword} onChange={this.handleChange}/>
                <select name='category_id' value={category_id} onChange={this.handleChange}>
                    <option value='-1'>Category</option>
                    {categories.map(c => <option value={c.id} key={c.id}>{c.category}</option>)}
                </select>
                <button type='submit' disabled={!this.validate()} onClick={this.handleCreateKW}>Create</button>
            </div>
        );
    }
}

export default KWGenerate;
import React from 'react';
import PropTypes from 'prop-types';
import KWItemValue from './KWItemValue';
import KWItemControl from './KWItemControl';

class KWItem extends React.Component{
    static propTypes = {
        id: PropTypes.number,
        keyword: PropTypes.string,
        category: PropTypes.string,
        handleUpdateKW: PropTypes.func,
        handleDeleteKW: PropTypes.func,
    };
    
    state = {
        value: ''
    };

    componentDidMount(){
        const {keyword} = this.props;
        this.setState({value: keyword});
    }

    componentDidUpdate(prevProps){
        const {keyword} = this.props;
        if(prevProps.keyword != keyword){
            this.setState({value: keyword});
        }
    }

    handleChange = (value) => {
        this.setState({value});
    };

    handleDeleteKW = (id) => {
        this.props.handleDeleteKW(id);
    };

    handleUpdateKW = (id) => {
        const {value} = this.state;
        this.props.handleUpdateKW(id, value);
    }

    render(){
        const {value} = this.state;
        const {category, id} = this.props;

        return(
            <tr>
                <td>
                    <KWItemValue
                        value={value}
                        handleChange={this.handleChange}
                    />
                </td>
                <td>
                    {category}
                </td>
                <td>
                    <KWItemControl
                        id={id}
                        handleDeleteKW={this.handleDeleteKW}
                        handleUpdateKW={this.handleUpdateKW}
                    />
                </td>
            </tr>
        );
    }
}

export default KWItem;

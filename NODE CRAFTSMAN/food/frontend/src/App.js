import React from 'react';
import parallel from 'async/parallel';
import axios from 'axios';
import KWGenerate from './component/KWGenerate';

class App extends React.Component{
    state = {
        keywords: [],
        categories: [],
        isFetching: false,
        errorMsg: ''
    };

    componentDidMount(){
        parallel({
            keywords: (cb) => {
                axios.get('/api/keywords')
                    .then(res => cb(null, res.data))
                    .catch(err => cb(err));
            },
            categories: (cb) => {
                axios.get('/api/categories')
                .then(res => cb(null, res.data))               
                .catch(err => cb(err));
            }
        }, (err, results) => {
            if(err){
                this.setState({errorMsg: err.message, isFetching: false});
            }

            this.setState({...this.state, ...results, isFetching: false, errorMsg: ''});
        });

        this.setState({isFetching: true});
    }

    handleSubmit = (keyword, category_id) => {

    };

    render(){
        const {isFetching, errorMsg, keywords, categories} = this.state;

        if(isFetching) return <div>Loading....</div>;
        if(errorMsg) return <div>{this.state.errorMsg}</div>;
        
        return (
            <div>
                <KWGenerate 
                    categories={categories}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default App;
import React from 'react';
import async from 'async';
import axios from 'axios';
import KWGenerate from './component/KWGenerate';
import KWList from './component/KWList';

class App extends React.Component{
    state = {
        keywords: [],
        categories: [],
        isFetching: false,
        errorMsg: ''
    };

    componentDidMount(){
        async.parallel({
            keywords: cb => {
                axios.get('/api/keywordAndCategory')
                    .then(res => cb(null, res.data))
                    .catch(err => cb(err));
            },
            categories: cb => {
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

    handleCreateKW = (keyword, category_id) => {
        async.series([
            cb => axios.post('/api/createKW', {
                keyword,
                category_id
            }).then(res => cb(null, res.data))
              .catch(err => cb(err)),
            cb => {
                axios.get('/api/keywordAndCategory')
                    .then(res => cb(null, res.data))
                    .catch(err => cb(err));
            }
        ], (err, results) => {
            if(err){
                this.setState({errorMsg: err.message});
            }

            this.setState({...this.state, keywords: results[1].slice(), errorMsg: ''});
        });
    };

    handleUpdateKW = (keyword_id, keyword) => {
        async.series([
            cb => axios.put('/api/updateKW', {
                keyword
            }, {
                params: {keyword_id}
            }).then(res => cb(null, res.data))
              .catch(err => cb(err)),
            cb => {
                axios.get('/api/keywordAndCategory')
                    .then(res => cb(null, res.data))
                    .catch(err => cb(err));
            }
        ], (err, results) => {
            if(err){
                this.setState({errorMsg: err.message});
            }

            this.setState({...this.state, keywords: results[1].slice(), errorMsg: ''});
        });
    };

    handleDeleteKW = (keyword_id) => {
        async.series([
            cb => axios.delete('/api/deleteKW', {
                params: {keyword_id}
            }).then(res => cb(null, res.data))
              .catch(err => cb(err)),
            cb => {
                axios.get('/api/keywordAndCategory')
                    .then(res => cb(null, res.data))
                    .catch(err => cb(err));
            }
        ], (err, results) => {
            if(err){
                this.setState({errorMsg: err.message});
            }

            this.setState({...this.state, keywords: results[1].slice(), errorMsg: ''});
        });
    };

    render(){
        const {isFetching, errorMsg, keywords, categories} = this.state;

        if(isFetching) return <div>Loading....</div>;
        if(errorMsg) return <div>{this.state.errorMsg}</div>;
                
        return (
            <div>
                <KWGenerate 
                    categories={categories}
                    handleCreateKW={this.handleCreateKW}
                />
                <KWList 
                    keywords={keywords}
                    handleDeleteKW={this.handleDeleteKW}
                    handleUpdateKW={this.handleUpdateKW}
                />
            </div>
        );
    }
}

export default App;
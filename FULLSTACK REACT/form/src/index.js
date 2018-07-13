import React, {Component} from "react";
import ReactDOM from "react-dom";
import Form from './form';
import List from './list';

class App extends Component{
  state = {
    people: [],
    loading: false,
    saveStatus: 'Ready'
  };

  componentDidMount(){
    this.setState({loading: true});
    apiClient.loadPeople()
      .then(people => this.setState({people, loading: false}));
  }

  handleSubmit = (person) => {
    this.setState({saveStatus: 'Saving'});
    let people = [...this.state.people, person];
    apiClient.savePeople(people)
      .then(result => result === 'Saved' && this.setState({saveStatus: 'Ready', people}))
      .catch(result => this.setState({saveStatus: result}));
  };

  render(){
    if(this.state.loading){ 
      return <img alt='loading' src='../public/img/loading.gif' />
    }
    return(
      <div>
        <Form 
          saveStatus={this.state.saveStatus} 
          title='Sign Up Sheet' 
          handleSubmit={(person) => {this.handleSubmit(person)}}
        />
        <List people={this.state.people} />
      </div>
    );
  }
}

const apiClient = {
  loadPeople:() => ({
    then: cb => {
      setTimeout(() => {
        cb(JSON.parse(localStorage.getItem('people') || '[]'))
      }, 1000);
    }
  }), 
  savePeople(people){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(this.count++ % 2 === 0){
            localStorage.setItem('people', JSON.stringify(people));
            resolve('Saved');
          }else{
            reject('Error');
          }
        }, 500);
    });
  },
  count: 0
};

ReactDOM.render(<App />, document.getElementById("App"));
import React, { Component } from 'react';
import data from './data/dummy.json';
import ProductList from './components/ProductList';
import './style/App.css';

class ListContainer extends Component {

  render() {
    return (
      <div className="App">
        <section>
          <h2>{data.title}</h2>
          <ProductList pList={data.pList} />
        </section>
      </div>
    );
  }
}

export default ListContainer;

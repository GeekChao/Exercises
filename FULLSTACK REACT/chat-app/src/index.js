import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import configureStore from './configureStore';
import './index.css';

ReactDOM.render(<Root store={configureStore()}/>, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Categories from './components/Categories'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Categories />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Categories from './components/Categories'
import Services from './components/Services';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Categories />
    <Services /> 
  </React.StrictMode>,
  document.getElementById('root')
);

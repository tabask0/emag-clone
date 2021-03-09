import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Categories from './components/Categories'
import Services from './components/Services';
import Tazz from './components/tazz';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Categories />
    <Services /> 
    <Tazz />
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //sin poner la extension es el modulo global de App
import Header from './Header';
import Footer from './Footer';
import './index.css';

ReactDOM.render(
  <Header />,
  document.getElementById('main-header')
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Footer />,
 	document.getElementById('footer')
 );

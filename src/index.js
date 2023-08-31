import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div className="container">
    <div className="left-column"></div>
    <div className="content">
      <App />
    </div>
    <div className="right-column"></div>
  </div>,
  document.getElementById('root')
);

reportWebVitals();

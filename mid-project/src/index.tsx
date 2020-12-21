import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';
// import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';

const App = require('./App').default;

const renderTarget = document.getElementById('app');
render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  renderTarget,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

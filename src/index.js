import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './App.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './index.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </Provider>,
  target
);

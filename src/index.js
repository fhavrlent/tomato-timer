import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import { BrowserRouter } from 'react-router-dom';
import { saveState } from './localStorage';
import store from './store';
import App from './App.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/flatly/bootstrap.min.css';
import './index.css';

const target = document.querySelector('#root');

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  target
);

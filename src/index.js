import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './App.js';
import { Route } from 'react-router-dom';
import Timer from './containers/Timer';
import Settings from './containers/Settings';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App>
          <Route exact path="/" component={Timer} />
          <Route exact path="/settings" component={Settings} />
        </App>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

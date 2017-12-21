import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.js';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Timer from './containers/Timer';
import Settings from './containers/Settings';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <BrowserRouter basename="/tomato-timer">
      <div>
        <App>
          <Switch>
            <Route exact path="/" component={Timer} />
            <Route exact path="/settings" component={Settings} />
            <Redirect from="*" to="/" />
          </Switch>
        </App>
      </div>
    </BrowserRouter>
  </Provider>,
  target
);

import React from 'react';
import Navigation from './components/Common/Navbar';
import Timer from './containers/Timer';
import Settings from './containers/Settings';
import { Redirect, Switch, Route } from 'react-router-dom';
import './App.css';

const App = ({ children }) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Timer} />
          <Route exact path="/settings" component={Settings} />
          <Redirect from="*" to="/" />
        </Switch>
      </main>
    </div>
  );
};

export default App;

import React from 'react';
import { Route, Link } from 'react-router-dom';
import Timer from './containers/Timer';
import Settings from './containers/Settings';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Timer} />
      <Route exact path="/about-us" component={Settings} />
    </main>
  </div>
);

export default App;

import React from 'react';
import Navigation from './components/Common/Navbar';
import './App.css';

const App = ({ children }) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default App;

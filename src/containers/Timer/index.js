import React, { Component } from 'react';
import Timer from './Timer';
import './Timer.css';

class TimerPage extends Component {
  componentWillMount() {

    if ('Notification' in window) {

      Notification.requestPermission();
    }
  }
  render() {
    return <Timer />;
  }
}

export default TimerPage;

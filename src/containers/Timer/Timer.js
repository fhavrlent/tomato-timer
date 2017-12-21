import React, { Component } from 'react';
import { Count } from '../../components/Timer/';

class Timer extends Component {
  render() {
    return (
      <div className="main">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <Count />
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;

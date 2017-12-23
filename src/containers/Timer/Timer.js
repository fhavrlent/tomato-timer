import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';
import { Count, Control, SecondControl } from '../../components/Timer/';

class Timer extends Component {
  render() {
    const {
      timeLeft,
      pomodoro,
      smallBreak,
      longBreak,
      handleButtonClick,
      handleStopCount
    } = this.props;
    return (
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <Alert color="warning">
                This is a beta version, some things are still not working.
              </Alert>
              <Control
                pomodoro={pomodoro}
                smallBreak={smallBreak}
                longBreak={longBreak}
                handleClick={handleButtonClick}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <Count timeLeft={timeLeft} />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <SecondControl clickStop={handleStopCount} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  timeLeft: PropTypes.number,
  pomodoro: PropTypes.number.isRequired,
  smallBreak: PropTypes.number.isRequired,
  longBreak: PropTypes.number.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handleStopCount: PropTypes.func.isRequired
};

export default Timer;

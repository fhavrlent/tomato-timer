import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Count, Control } from '../../components/Timer/';
import {
  startCountDown,
  countDown,
  stopCountDown
} from '../../dispatchers/TimerActions';

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.timeLeft <= 0) {
      this.handleStopCount();
    }
  }

  timer = () => {
    const { countDown } = this.props;
    const time = setInterval(() => countDown(), 1000);
    return time;
  };

  handleButtonClick = e => {
    const { startCountDown, counterID } = this.props;
    clearInterval(counterID);
    startCountDown({ value: e.target.name, counterID: this.timer() });
  };

  handleStopCount = () => {
    const { stopCountDown, counterID } = this.props;
    clearInterval(counterID);
    stopCountDown();
  };

  render() {
    const { timeLeft, pomodoro, smallBreak, longBreak } = this.props;

    return (
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <Count timeLeft={timeLeft} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <Control
                pomodoro={pomodoro}
                smallBreak={smallBreak}
                longBreak={longBreak}
                handleClick={this.handleButtonClick}
              />
            </div>
            <button onClick={this.handleStopCount}>stop</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { pomodoro, smallBreak, longBreak } = state.settings;
  const { timeLeft, isCounting, counterID } = state.timer;
  return {
    pomodoro,
    smallBreak,
    longBreak,
    timeLeft,
    isCounting,
    counterID
  };
};

const mapDispatchToProps = {
  startCountDown,
  countDown,
  stopCountDown
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

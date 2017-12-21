import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Count, Control, SecondControl } from '../../components/Timer/';
import {
  startCountDown,
  countDown,
  stopCountDown
} from '../../dispatchers/TimerActions';

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.timeLeft <= 0) {
      const { type } = this.props;
      new Notification(type + ' time is up!');
      document.title = 'Time is up';
      this.handleStopCount();
    }
    if (nextProps.timeLeft !== this.props.timeLeft) {
      document.title =
        parseInt(moment(nextProps.timeLeft).minutes(), 0) + 1 + ' minutes left';
    }
  }

  timer = () => {
    const { countDown } = this.props;
    const time = setInterval(() => countDown(), 1000);
    return time;
  };

  handleButtonClick = e => {
    if (Notification.permission === 'granted') {
      const { startCountDown, counterID } = this.props;
      clearInterval(counterID);
      startCountDown({
        value: e.target.name,
        counterID: this.timer(),
        type: e.target.id
      });
    } else {
      Notification.requestPermission();
    }
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
              <Control
                pomodoro={pomodoro}
                smallBreak={smallBreak}
                longBreak={longBreak}
                handleClick={this.handleButtonClick}
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
              <SecondControl clickStop={this.handleStopCount} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { pomodoro, smallBreak, longBreak } = state.settings;
  const { timeLeft, isCounting, counterID, type } = state.timer;
  return {
    pomodoro,
    smallBreak,
    longBreak,
    timeLeft,
    isCounting,
    counterID,
    type
  };
};

const mapDispatchToProps = {
  startCountDown,
  countDown,
  stopCountDown
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
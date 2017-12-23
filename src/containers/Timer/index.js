import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import ding from '../../utils/ding.wav';
import {
  startCountDown,
  countDown,
  stopCountDown,
  changeTimeLeft
} from '../../dispatchers/TimerActions';
import Timer from './Timer';
import './Timer.css';

class TimerPage extends Component {
  static propTypes = {
    pomodoro: PropTypes.number.isRequired,
    smallBreak: PropTypes.number.isRequired,
    longBreak: PropTypes.number.isRequired,
    timeLeft: PropTypes.number.isRequired,
    isCounting: PropTypes.bool.isRequired,
    counterID: PropTypes.number,
    type: PropTypes.string,
    startCountDown: PropTypes.func.isRequired,
    countDown: PropTypes.func.isRequired,
    stopCountDown: PropTypes.func.isRequired,
    changeTimeLeft: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired
  };

  componentWillMount() {
    if ('Notification' in window) {
      Notification.requestPermission();
    }
  }

  componentDidMount() {
    const { pomodoro, changeTimeLeft } = this.props;
    changeTimeLeft({ value: pomodoro });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.timeLeft <= 0) {
      const { type } = this.props;
      if ('Notification' in window) {
        new Notification(type + ' time is up!');
      }
      this.playNotification();
      document.title = 'Time is up';
      this.handleStopCount();
    }
    if (nextProps.timeLeft !== this.props.timeLeft) {
      document.title =
        parseInt(moment(nextProps.timeLeft).minutes(), 0) + ' minutes left';
    }
  }

  componentWillUnmount() {
    const { counterID } = this.props;
    clearInterval(counterID);
    stopCountDown();
    document.title = 'Tomato Timer';
  }

  timer = () => {
    const { countDown } = this.props;
    const time = setInterval(() => countDown(), 1000);
    return time;
  };

  playNotification = () => {
    const audio = new Audio(ding);
    audio.volume = 0.6;
    audio.play();
  };

  handleButtonClick = e => {
    const { startCountDown, counterID } = this.props;
    clearInterval(counterID);
    startCountDown({
      value: e.target.name,
      counterID: this.timer(),
      type: e.target.id
    });
  };

  handleStopCount = () => {
    const { stopCountDown, counterID } = this.props;
    document.title = 'Tomato Timer';
    clearInterval(counterID);
    stopCountDown();
  };

  handleContinueCount = () => {
    const { timeLeft, type, counterID, startCountDown } = this.props;
    clearInterval(counterID);
    startCountDown({
      value: timeLeft,
      counterID: this.timer(),
      type: type
    });
  };

  render() {
    const { timeLeft, pomodoro, smallBreak, longBreak, darkMode } = this.props;
    return (
      <Timer
        timeLeft={timeLeft}
        pomodoro={pomodoro}
        smallBreak={smallBreak}
        longBreak={longBreak}
        handleButtonClick={this.handleButtonClick}
        handleStopCount={this.handleStopCount}
        handleContinueCount={this.handleContinueCount}
        style={darkMode ? { background: 'black', color: 'whitesmoke' } : {}}
      />
    );
  }
}

const mapStateToProps = state => {
  const { pomodoro, smallBreak, longBreak, darkMode } = state.settings;
  const { timeLeft, isCounting, counterID, type } = state.timer;
  return {
    pomodoro,
    smallBreak,
    longBreak,
    timeLeft,
    isCounting,
    counterID,
    type,
    darkMode
  };
};

const mapDispatchToProps = {
  startCountDown,
  countDown,
  stopCountDown,
  changeTimeLeft
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerPage);

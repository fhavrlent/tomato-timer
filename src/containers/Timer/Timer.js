import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Alert } from 'reactstrap';
import { Count, Control, SecondControl } from '../../components/Timer/';
import ding from '../../utils/ding.wav';
import {
  startCountDown,
  countDown,
  stopCountDown
} from '../../dispatchers/TimerActions';

class Timer extends Component {
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
    stopCountDown: PropTypes.func.isRequired
  };

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

  render() {
    const { timeLeft, pomodoro, smallBreak, longBreak } = this.props;

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

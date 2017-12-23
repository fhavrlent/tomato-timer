import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Settings from './Settings';
import { setTime, reset } from '../../dispatchers/SettingActions';
import { changeTimeLeft } from '../../dispatchers/TimerActions';

class SettingsPage extends Component {
  static propTypes = {
    setTime: PropTypes.func.isRequired,
    smallBreak: PropTypes.number.isRequired,
    longBreak: PropTypes.number.isRequired,
    pomodoro: PropTypes.number.isRequired,
    changeTimeLeft: PropTypes.func.isRequired
  };

  onChangeTime = e => {
    const { setTime, changeTimeLeft } = this.props;
    const value = parseInt(e.target.value, 0);
    setTime({ value, name: e.target.name });
    changeTimeLeft({ value, name: e.target.name });
  };

  render() {
    const { smallBreak, longBreak, pomodoro, reset } = this.props;
    const optionValues = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    return (
      <Settings
        setTime={this.onChangeTime}
        shortBreak={smallBreak}
        longBreak={longBreak}
        pomodoro={pomodoro}
        reset={reset}
        optionValues={optionValues}
      />
    );
  }
}

const mapStateToProps = state => {
  const { pomodoro, smallBreak, longBreak } = state.settings;
  return { pomodoro, smallBreak, longBreak };
};

const mapDispatchToProps = {
  setTime,
  reset,
  changeTimeLeft
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Settings from './Settings';
import {
  setTime,
  reset,
  toggleDarkMode
} from '../../dispatchers/SettingActions';

class SettingsPage extends Component {
  static propTypes = {
    setTime: PropTypes.func.isRequired,
    smallBreak: PropTypes.number.isRequired,
    longBreak: PropTypes.number.isRequired,
    pomodoro: PropTypes.number.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
    darkMode: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired
  };

  onChangeTime = e => {
    const { setTime } = this.props;
    const value = parseInt(e.target.value, 0);
    setTime({ value, name: e.target.name });
  };

  onResetButton = () => {
    const { reset } = this.props;
    reset();
  };

  onCheckboxChange = e => {
    const { toggleDarkMode } = this.props;
    toggleDarkMode(e.target.checked);
  };

  render() {
    const { smallBreak, longBreak, pomodoro, darkMode } = this.props;
    const optionValues = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    return (
      <Settings
        setTime={this.onChangeTime}
        shortBreak={smallBreak}
        longBreak={longBreak}
        pomodoro={pomodoro}
        reset={this.onResetButton}
        optionValues={optionValues}
        onCheckboxChange={this.onCheckboxChange}
        style={darkMode ? { background: 'black', color: 'whitesmoke' } : {}}
        darkMode={darkMode}
      />
    );
  }
}

const mapStateToProps = state => {
  const { pomodoro, smallBreak, longBreak, darkMode } = state.settings;
  return { pomodoro, smallBreak, longBreak, darkMode };
};

const mapDispatchToProps = {
  setTime,
  reset,
  toggleDarkMode
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);

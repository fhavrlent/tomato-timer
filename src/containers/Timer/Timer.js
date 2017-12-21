import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Count } from '../../components/Timer/';

class Timer extends Component {
  render() {
    const { timeLeft } = this.props;

    return (
      <div className="main">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <Count timeLeft={timeLeft} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { pomodoro, smallBreak, longBreak } = state.settings;
  const { timeLeft } = state.timer;
  return {
    pomodoro,
    smallBreak,
    longBreak,
    timeLeft
  };
};

export default connect(mapStateToProps)(Timer);

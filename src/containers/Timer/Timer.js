import React from 'react';
import PropTypes from 'prop-types';

import { Count, Control, SecondControl } from '../../components/Timer/';

const Timer = ({
  timeLeft,
  pomodoro,
  smallBreak,
  longBreak,
  handleButtonClick,
  handleStopCount,
  handleContinueCount,
  style
}) => {
  return (
    <div className="main" style={style}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <Control
              pomodoro={pomodoro}
              smallBreak={smallBreak}
              longBreak={longBreak}
              handleClick={handleButtonClick}
            />
            <Count timeLeft={timeLeft} />
            <SecondControl
              clickStop={handleStopCount}
              handleContinueCount={handleContinueCount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Timer.propTypes = {
  timeLeft: PropTypes.number,
  pomodoro: PropTypes.number.isRequired,
  smallBreak: PropTypes.number.isRequired,
  longBreak: PropTypes.number.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handleStopCount: PropTypes.func.isRequired,
  handleContinueCount: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired
};

export default Timer;

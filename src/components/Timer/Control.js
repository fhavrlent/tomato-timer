import React from 'react';
import { Button } from 'reactstrap';

const Control = ({ pomodoro, smallBreak, longBreak, handleClick }) => {
  return (
    <div className="text-center pomodoro-buttons">
      <Button
        color="success"
        name={pomodoro}
        onClick={handleClick}
        size={'lg'}
        id={'Pomodoro'}
      >
        Pomodoro
      </Button>{' '}
      <Button
        color="primary"
        name={smallBreak}
        id="Short Break"
        onClick={handleClick}
        size={'lg'}
      >
        Short Break
      </Button>{' '}
      <Button
        color="secondary"
        name={longBreak}
        id="Long Break"
        onClick={handleClick}
        size={'lg'}
      >
        Long Break
      </Button>{' '}
    </div>
  );
};

export default Control;

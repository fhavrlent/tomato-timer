import React from 'react';
import { Button } from 'reactstrap';

const Control = ({ pomodoro, smallBreak, longBreak, handleClick }) => {
  return (
    <div className="text-center">
      <Button color="primary" name={pomodoro} onClick={handleClick}>
        Pomodoro
      </Button>{' '}
      <Button color="secondary" name={smallBreak} onClick={handleClick}>
        Small Break
      </Button>{' '}
      <Button color="success" name={longBreak} onClick={handleClick}>
        Long Break
      </Button>{' '}
    </div>
  );
};

export default Control;

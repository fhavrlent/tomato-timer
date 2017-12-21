import React from 'react';
import { Button } from 'reactstrap';

const Control = ({ pomodoro, smallBreak, longBreak, handleClick }) => {
  return (
    <div className="text-center">
      <Button color="success" name={pomodoro} onClick={handleClick} size={'lg'}>
        Pomodoro
      </Button>{' '}
      <Button
        color="primary"
        name={smallBreak}
        onClick={handleClick}
        size={'lg'}
      >
        Short Break
      </Button>{' '}
      <Button
        color="secondary"
        name={longBreak}
        onClick={handleClick}
        size={'lg'}
      >
        Long Break
      </Button>{' '}
    </div>
  );
};

export default Control;

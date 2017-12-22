import React from 'react';
import { Button } from 'reactstrap';

const SecondControl = ({ clickStop }) => {
  return (
    <div className="text-center control-buttons">
      <Button color="info" className="col-xs-3" onClick={null} size={'lg'}>
        Continue
      </Button>{' '}
      <Button
        color="warning"
        className="col-xs-3"
        onClick={clickStop}
        size={'lg'}
      >
        Pause
      </Button>
    </div>
  );
};

export default SecondControl;

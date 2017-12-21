import React from 'react';
import { Button } from 'reactstrap';

const SecondControl = ({ clickStop }) => {
  return (
    <div className="text-center">
      <Button color="danger" onClick={clickStop} size={'lg'}>
        Stop
      </Button>
    </div>
  );
};

export default SecondControl;

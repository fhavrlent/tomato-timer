import React from 'react';
import PropTypes from 'prop-types';
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

SecondControl.propTypes = {
  clickStop: PropTypes.func.isRequired
};

export default SecondControl;

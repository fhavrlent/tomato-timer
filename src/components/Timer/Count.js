import React from 'react';
import PropTypes from 'prop-types';

import format from 'date-fns/format';

const Count = ({ timeLeft }) => {
  return <h2 className="text-center">{format(timeLeft, 'mm:ss')}</h2>;
};

Count.propTypes = {
  timeLeft: PropTypes.number.isRequired
};

export default Count;

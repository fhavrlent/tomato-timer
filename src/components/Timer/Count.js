import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Count = ({ timeLeft }) => {
  return <h2 className="text-center">{moment(timeLeft).format('mm:ss')}</h2>;
};

Count.propTypes = {
  timeLeft: PropTypes.number.isRequired
};

export default Count;

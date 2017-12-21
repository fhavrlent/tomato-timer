import React from 'react';
import moment from 'moment';

const Count = ({ timeLeft }) => {
  return <h2 className="text-center">{moment(timeLeft).format('mm:ss')}</h2>;
};

export default Count;

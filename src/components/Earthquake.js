import React from 'react';
import PropTypes from 'prop-types';

const Earthquake = (props) => {
  const { title, place } = props;
  return (
    <div>
      <div>{title}</div>
      <div>{place}</div>
    </div>
  );
};

Earthquake.propTypes = {
  title: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
};

export default Earthquake;

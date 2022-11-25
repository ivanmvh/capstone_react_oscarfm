import React from 'react';
import PropTypes from 'prop-types';
import arrow from '../images/arrow.svg';

const Earthquake = (props) => {
  const { title, place, mag } = props;
  return (
    <div className="item">
      <div className="magnitude">{mag}</div>
      <div>
        <div className="item__title">{title}</div>
        <div className="item__place">{place}</div>
      </div>
      <buttton type="submit" className="item__btn"><img className="imgBtn" src={arrow} alt="See" /></buttton>
    </div>
  );
};

Earthquake.propTypes = {
  title: PropTypes.string.isRequired,
  mag: PropTypes.number.isRequired,
  place: PropTypes.string.isRequired,
};

export default Earthquake;

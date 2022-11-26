import React from 'react';
import PropTypes from 'prop-types';

const Feature = (props) => {
  const { titleUsgs, count, api } = props;
  return (
    <div className="feature_detail">
      <div className="apiVersion">
        {titleUsgs}
        - API ver.
        {api}
      </div>
      <div className="results">
        Results:
        {count}
      </div>
    </div>
  );
};

Feature.propTypes = {
  titleUsgs: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  api: PropTypes.string.isRequired,
};

export default Feature;

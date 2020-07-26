import React from 'react';
import PropTypes from 'prop-types';

/**
 * Represents a loader
 * @constructor
 * @param {string} title - Loader's title
 */
export default function Loading({title = 'Loading...'}) {
  return <h4>{title}</h4>;
}

Loading.propTypes = {
  title: PropTypes.string,
};

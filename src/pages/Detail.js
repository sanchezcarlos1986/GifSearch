import React from 'react';
import PropTypes from 'prop-types';

/**
 * Represents a block with the Detail's content.
 * @constructor
 * @param {object} params - Contains the id from the router's url
 */
export default function Detail({params: {id}}) {
  return <h1>Gif con id {id}</h1>;
}

Detail.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

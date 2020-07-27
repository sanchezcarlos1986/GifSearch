import React from 'react';
import {Link} from 'wouter';
import PropTypes from 'prop-types';

/**
 * Represents a block with the gif's content.
 * @constructor
 * @param {string} id - Gif's id
 * @param {string} url - Gif's url
 * @param {string} title - Gif's title
 */
export default function Gif({id, url, title}) {
  return (
    <Link to={`#${id}`} className="Gif">
      <h4>{title || 'No title ...'}</h4>
      <img src={url} alt={title} />
    </Link>
  );
}

Gif.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

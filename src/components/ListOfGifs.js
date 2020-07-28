import React, {memo} from 'react';
import PropTypes from 'prop-types';
import Gif from '~components/Gif';

/**
 * Represents a list.
 * @constructor
 * @param {array} gifs - List of gifs
 */
function ListOfGifs({gifs}) {
  return (
    <div className="ListOfGifs">
      {gifs.map(({id, url, title}) => (
        <Gif key={id} id={id} url={url} title={title} />
      ))}
    </div>
  );
}

ListOfGifs.propTypes = {
  gifs: PropTypes.array.isRequired,
};

export default memo(ListOfGifs);

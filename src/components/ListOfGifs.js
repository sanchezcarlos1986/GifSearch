import React from 'react';
import PropTypes from 'prop-types';
import {useFetchGifs} from '../hooks/useFetchGifs';
import Loading from './Loading';
import Gif from './Gif';

/**
 * Represents a list.
 * @constructor
 * @param {array} gifs - List of gifs
 */
export default function ListOfGifs({category}) {
  const {data, loading} = useFetchGifs(category);

  return (
    <div className="ListOfGifs">
      {loading ? (
        <Loading />
      ) : (
        <>
          {data.map(({id, url, title}) => (
            <Gif key={id} id={id} url={url} title={title} />
          ))}
        </>
      )}
    </div>
  );
}

ListOfGifs.propTypes = {
  category: PropTypes.string.isRequired,
};

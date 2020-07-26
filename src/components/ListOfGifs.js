import React from 'react';
import PropTypes from 'prop-types';
import {useFetchGifs} from '../hooks/useFetchGifs';
import Loading from './Loading';
import Gif from './Gif';

/**
 * Represents a list.
 * @constructor
 * @param {object} params - Contains the keyword from the router's url
 */
export default function ListOfGifs({params}) {
  const {keyword} = params;
  const {data, loading} = useFetchGifs(keyword);

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
  params: PropTypes.shape({
    keyword: PropTypes.string.isRequired,
  }),
};

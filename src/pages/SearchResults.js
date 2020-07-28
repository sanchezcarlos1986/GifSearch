import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {useFetchGifs} from '~hooks';
import {Loading, ListOfGifs} from '~components';

/**
 * Represents a list.
 * @constructor
 * @param {object} params - Contains the keyword from the router's url
 */
function SearchResults({params: {keyword}}) {
  const {data, loading} = useFetchGifs(keyword);

  return (
    <div className="SearchResults">
      {loading ? <Loading /> : <ListOfGifs gifs={data} />}
    </div>
  );
}

SearchResults.propTypes = {
  params: PropTypes.shape({
    keyword: PropTypes.string.isRequired,
  }),
};

export default memo(SearchResults);

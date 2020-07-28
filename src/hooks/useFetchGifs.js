import {useState, useEffect} from 'react';
import {getGifs} from '~helpers';

/**
 * Represents a useEffect statement
 * @constructor
 * @param {string} category - Category to search and set data
 */
const useFetchGifs = category => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then(imgs =>
      setState({
        data: imgs,
        loading: false,
      }),
    );
  }, [category]);

  return state; // {data: [], loading: true}
};

export default useFetchGifs;

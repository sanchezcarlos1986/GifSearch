import React from 'react';
import PropTypes from 'prop-types';
import {useFetchGifs} from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {
  const {data, loading} = useFetchGifs(category);

  return (
    <div className="GifGrid">
      <h3>{category}</h3>
      {loading && 'Cargando...'}
      {data.length > 0 && (
        <ul>
          {data.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ul>
      )}
    </div>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string,
};

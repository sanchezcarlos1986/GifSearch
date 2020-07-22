import React from 'react';
import PropTypes from 'prop-types';
import {useFetchGifs} from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({category}) {
  const {data: images, loading} = useFetchGifs(category);

  return (
    <div className="GifGrid">
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      {images.length > 0 && (
        <ul>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ul>
      )}
    </div>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

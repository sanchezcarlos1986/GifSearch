import React from 'react';
import './App.css';
import {useFetchGifs} from './hooks/useFetchGifs';
import ListOfGifs from './components/ListOfGifs';
import Loading from './components/Loading';

/**
 * App component
 * @constructor
 * @return {function} Returns a component
 */
function App() {
  const {data, loading} = useFetchGifs('city pop');

  return (
    <div className="App">
      {loading ? <Loading /> : <ListOfGifs gifs={data} />}
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

/**
 * App component
 * @constructor
 * @return {function} Returns a component
 */
function App() {
  return (
    <div className="App">
      <h1>Giffy</h1>
      <ListOfGifs category="mega man" />
    </div>
  );
}

export default App;

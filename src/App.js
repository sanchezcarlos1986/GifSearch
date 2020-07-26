import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import {Route} from 'wouter';

/**
 * App component
 * @constructor
 * @return {function} Returns a component
 */
function App() {
  return (
    <div className="App">
      <h1>Giffy</h1>
      <Route path="/gif/:keyword" component={ListOfGifs} />
      {/* <ListOfGifs category="mega man" /> */}
    </div>
  );
}

export default App;

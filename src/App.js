import React, {useState} from 'react';
import './App.css';
import {SearchResults, Detail} from '~pages';
import {Route, useLocation} from 'wouter';

/**
 * App component
 * @constructor
 * @return {function} Returns a component
 */
function App() {
  const [keyword, setKeyword] = useState('');
  const [, pushLocation] = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    pushLocation(`/search/${keyword}`);
    setKeyword('');
  };

  return (
    <div className="App">
      <h1>Giffy</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="Enter a keyword"
        />
      </form>
      <Route path="/search/:keyword" component={SearchResults} />
      <Route path="/gif/:id" component={Detail} />
    </div>
  );
}

export default App;

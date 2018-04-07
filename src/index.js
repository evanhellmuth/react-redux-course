import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAuG5QnD134u3zFYjdQhGFDeIZWzxw2m1A';

const App = () => {
  return (<div>
    <SearchBar />
  </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
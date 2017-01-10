import React from 'react';
import Search from './components/search/Search';
import SongList from './components/songlist/SongList';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Search />
      <SongList />
    </div>
  );
}

export default App;

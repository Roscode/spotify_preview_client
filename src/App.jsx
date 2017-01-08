import React from 'react';
import Search from './components/Search';
import SongList from './components/SongList';
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

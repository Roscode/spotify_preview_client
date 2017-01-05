import React, { Component } from 'react';
import Search from './components/Search';
import SongList from './components/SongList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <SongList />
      </div>
    );
  }
}

export default App;

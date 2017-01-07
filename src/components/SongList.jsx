import React from 'react';
import { connect } from 'react-redux';
import Song from './Song';

const songList = ({tracks}) => {
  let songs = [];
  // TODO add limit property to state and use it in the for loop
  for (let i=0; i < tracks.length; i++) {
    songs.push(<li key={i}><Song track={tracks[i]}/></li>)
  }
  return (
    <ul>
      {songs}
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    tracks: state.results.items.tracks
  }
}

const SongList = connect(mapStateToProps)(songList);

export default SongList;

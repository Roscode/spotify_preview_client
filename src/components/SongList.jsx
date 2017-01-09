import React from 'react';
import { connect } from 'react-redux';
import Song from './Song';

export const SongList = ({tracks}) => {
  if (tracks.length) {
    return (
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell">#</th>
            <th><pre>               </pre></th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track, idx) => <Song key={track.id} idx={idx} track={track} />)}
        </tbody>
      </table>
    );
  } else {
    return <div></div>
  }
}

const mapStateToProps = (state) => {
  return {
    tracks: state.results.items.tracks
  }
}


export default connect(mapStateToProps)(SongList);

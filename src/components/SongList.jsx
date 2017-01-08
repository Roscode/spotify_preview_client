import React from 'react';
import { connect } from 'react-redux';
import Song from './Song';

const songList = ({tracks}) => {
  if (tracks.length) {
    return (
      <table className="pure-g pure-table pure-table-striped pure-table-horizontal">
        <thead className="pure-u-1">
          <tr>
            <th>#</th>
            <th><pre>    </pre></th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody className="pure-u-1">
          {tracks.map((track, idx) => <Song key={idx} track={track} />)}
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

const SongList = connect(mapStateToProps)(songList);

export default SongList;

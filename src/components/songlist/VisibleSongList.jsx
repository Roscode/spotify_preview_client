import React from 'react';
import Song from '../song/Song';
const PropTypes = React.PropTypes;
import { trackPropType } from '../propTypes';

const SongList = ({tracks}) => {
  if (tracks.length) {
    return (
      <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell">#</th>
            <th></th>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track, index) => <Song key={track.id} index={index} track={track} />)}
        </tbody>
      </table>
    );
  } else {
    return <div></div>
  }
}

SongList.propTypes = {
  tracks: PropTypes.arrayOf(trackPropType).isRequired
}

export default SongList;

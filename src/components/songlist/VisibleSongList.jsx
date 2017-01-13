import React from 'react';
import Song from '../song/Song';
const PropTypes = React.PropTypes;
import { trackPropType } from '../propTypes';
import VisibleSong from '../song/VisibleSong';
import SongListHeader from './SongListHeader';

const SongList = ({tracks}) => {
  if (tracks.length) {
    return (
      <div>
        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
          <SongListHeader />
          <tbody>
            {tracks.map((track, index) => <Song key={track.id} index={index} track={track} />)}
          </tbody>
        </table>
        <div>
          <button style={{float: 'left'}}>Previous</button>
          <button style={{float: 'right'}}>Next</button>
        </div>
      </div>
    );
  } else {
    return <div></div>
  }
}

SongList.propTypes = {
  tracks: PropTypes.arrayOf(trackPropType).isRequired
}

SongList.sampleProps = {
  tracks: [
    VisibleSong.sampleProps.track
  ]
};

export default SongList;

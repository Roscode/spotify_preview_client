import React from 'react';
import Sound from 'react-sound';

const PropTypes = React.PropTypes;



const Song = ({selected, playing, track, index, play, pause}) => {
  return (
    <tr>
      <td>{index}</td>
      <td>
        {selected ? (<Sound
          url={track.preview_url}
          playStatus={playing ? Sound.status.PLAYING : Sound.status.PAUSED}
          playFromPosition={0}
          onLoading={() => console.log('song loading')}
          onPlaying={() => console.log('song playing')}
          onFinishedPlaying={() => console.log('song finished')}
          />) : null}
        <button onClick={() => playing ? pause() : play(track) }
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          { selected && playing ? "Pause" : "Play" }
        </button>
      </td>
      <td>{track.name}</td>
      <td>{track.artists[0].name}</td>
      <td>{track.album.name}</td>
    </tr>
  );
}

Song.propTypes = {
  selected: PropTypes.bool.isRequired,
  playing: PropTypes.bool.isRequired,
  track: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired,
    album: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }),
  index: PropTypes.number.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired
}

// TODO think of good default props for track info

export default Song;

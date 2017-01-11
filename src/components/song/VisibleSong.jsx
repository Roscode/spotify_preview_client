import React from 'react';
import Sound from 'react-sound';
import { trackPropType } from '../propTypes';

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
          <img alt={ selected && playing ? "PAUSE" : "PLAY" } src={ selected && playing ? "/pause.png" : "/play.png" }/>
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
  track: trackPropType.isRequired,
  index: PropTypes.number.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired
}

Song.sampleProps = {
  selected: true,
  playing: false,
  track: {
    preview_url: 'https://p.scdn.co/mp3-preview/d0f8166b16772d350909bd87e34cf0ef1041b010?cid=null',
    id: '27BpBnTNtY9SBrE3EusnM6',
    name: 'Islands',
    artists: [
      {
        name: 'The xx'
      }
    ],
    album: {
      name: 'xx'
    }
  },
  index: 1,
  play: () => {},
  pause: () => {}
}

export default Song;

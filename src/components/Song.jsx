import React from 'react';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { updateCurrentTrack, play as playState, pause as pauseState } from '../actions/actions'


// TODO add propTypes for all the components
// TODO remove more logic from this component

export const Song = ({currentTrack, isPlaying, track, idx, play, pause}) => {
  let sound = (currentTrack === track.id) ? (
    <Sound
      url={track.preview_url}
      playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
      playFromPosition={0}
      onLoading={() => console.log('song loading')}
      onPlaying={() => console.log('song playing')}
      onFinishedPlaying={() => console.log('song finished')}
      />) : null;
  return (
    <tr>
      <td>{idx + 1}</td>
      <td>
        {sound}
        <button onClick={() => isPlaying ? pause() : play(track) }
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          { isPlaying ? "Pause" : "Play" }
        </button>
      </td>
      <td>{track.name}</td>
      <td>{track.artists[0].name}</td>
      <td>{track.album.name}</td>
    </tr>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentTrack: state.currentTrack,
    isPlaying: state.playing && state.currentTrack === ownProps.track.id,
    track: ownProps.track,
    key: ownProps.idx
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    play: (track) => {
      dispatch(updateCurrentTrack(track.id));
      dispatch(playState())
    },
    pause: () => {
      dispatch(pauseState());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);

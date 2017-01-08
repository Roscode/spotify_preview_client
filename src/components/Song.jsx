import React from 'react';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { updateCurrentTrack, play as playState, pause as pauseState } from '../actions/actions'


const song = ({currentTrack, isPlaying, track, key, play, pause}) => {
  let sound = (currentTrack === track.id) ? (<Sound
    url={track.preview_url}
    playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
    playFromPosition={0}
    onLoading={() => console.log('song loading')}
    onPlaying={() => console.log('song playing')}
    onFinishedPlaying={() => console.log('song finished')}
    />) : <noscript />;
  return (
    <tr>
      <td>
        key
      </td>
    <td>
      {sound}
      <button onClick={() => isPlaying ? pause() : play(track) }>
        { isPlaying ? "Pause" : "Play" }
      </button>
    </td>
    <td> {track.name} </td>
    <td> {track.artists[0].name} </td>
    <td> {track.album.name}</td>
    </tr>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentTrack: state.currentTrack,
    isPlaying: state.playing && state.currentTrack === ownProps.track.id,
    track: ownProps.track,
    key: ownProps.key
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

const Song = connect(mapStateToProps, mapDispatchToProps)(song);

export default Song;

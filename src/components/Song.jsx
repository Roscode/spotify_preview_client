import React from 'react';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { updateCurrentTrack, play as playState, pause as pauseState } from '../actions/actions'


const song = ({currentTrack, playing, track, play, pause}) => {
  let sound = (currentTrack === track.id) ? (<Sound
    url={track.preview_url}
    playStatus={playing ? Sound.status.PLAYING : Sound.status.PAUSED}
    playFromPosition={0}
    onLoading={() => console.log('song loading')}
    onPlaying={() => console.log('song playing')}
    onFinishedPlaying={() => console.log('song finished')}
    />) : (<div style={ {display: 'none'} }></div>);
  return (
    <div>
    {sound}
    <div>
      <div> {track.name} </div>
      <button onClick={ () => playing && currentTrack === track.id ? pause() : play(track.id) }>
        {playing && track.id === currentTrack ? 'Pause' : 'Play' }
      </button>
    </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentTrack: state.currentTrack,
    playing: state.playing,
    track: ownProps.track
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    play: (id) => {
      dispatch(updateCurrentTrack(id));
      dispatch(playState())
    },
    pause: () => {
      dispatch(pauseState());
    }
  }
}

const Song = connect(mapStateToProps, mapDispatchToProps)(song);

export default Song;

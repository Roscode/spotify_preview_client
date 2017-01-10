import { connect } from 'react-redux';
import VisibleSong from './VisibleSong';
import { updateCurrentTrack, play, pause } from '../../actions/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    selected: state.currentTrack === ownProps.track.id,
    playing: state.playing,
    track: ownProps.track,
    index: ownProps.index + 1
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    play: (track) => {
      dispatch(updateCurrentTrack(track.id));
      dispatch(play());
    },
    pause: () => {
      dispatch(pause());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleSong);

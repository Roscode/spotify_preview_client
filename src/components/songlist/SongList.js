import { connect } from 'react-redux';
import VisibleSongList from './VisibleSongList';

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks.map((id) => state.tracksById[id])
  }
}


export default connect(mapStateToProps)(VisibleSongList);

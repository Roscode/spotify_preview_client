import { connect } from 'react-redux';
import VisibleSongList from './VisibleSongList';

const mapStateToProps = (state) => {
  return {
    tracks: state.results.items.tracks
  }
}


export default connect(mapStateToProps)(VisibleSongList);

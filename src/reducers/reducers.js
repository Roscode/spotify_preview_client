import { combineReducers } from 'redux';
import playing from './playing';
import searchContents from './searchContents';
import results from './results';
import currentTrack from './currentTrack';


 /*
 stateShape:

{
  currentTrack: trackid,
  searchContents: string,
  results: {
    isFetching: boolean,
    items: {
      tracks: [trackobjects],
      artists: [artistsobjects],
      albums: [albumobjects],
      playlist: [playlistobjects]
      }
    },
  playing: bool
}


 */

const rootReducer = combineReducers({
  searchContents,
  results,
  currentTrack,
  playing
})

export default rootReducer;

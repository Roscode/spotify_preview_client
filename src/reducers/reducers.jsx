import { combineReducers } from 'redux';
import {
  UPDATE_SEARCH_CONTENT,
  REQUEST_SONGS,
  RECEIVE_SONGS,
  FAIL_RECEIVE_SONGS,
 } from '../actions/actions.js'

 /*
 stateShape:

 {
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
 TODO add stuff for keeping track of playing a song.
 }


 */

const searchContents = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH_CONTENT:
      return action.payload.content;
    default:
      return state;
  }
}

const results = (
  state = {
    isFetching: false,
    items: {
      tracks: [],
      artists: [],
      albums: [],
      playlists: []
    }
  }, action) => {
  switch (action.type) {
    case REQUEST_SONGS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_SONGS:
      console.log(action.payload.tracks);
      return {
        isFetching: false,
        items: {
          tracks: action.payload.tracks
        }
      };
    case FAIL_RECEIVE_SONGS:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  searchContents,
  results
})

export default rootReducer;

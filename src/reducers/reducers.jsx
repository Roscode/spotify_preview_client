import { combineReducers } from 'redux';
import {
  UPDATE_SEARCH_CONTENT,
  UPDATE_CURRENT_TRACK,
  REQUEST_SONGS,
  RECEIVE_SONGS,
  FAIL_RECEIVE_SONGS,
  PLAY,
  PAUSE
} from '../actions/actiontypes'

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
  playing: bool
}


 */

const playing = (state = false, action) => {
  switch (action.type) {
    case PLAY:
      return true;
    case PAUSE:
      return false;
    default:
      return state;
    }
}

const searchContents = (state = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCH_CONTENT:
      return action.payload.content;
    default:
      return state;
  }
}


const initialResults = {
  isFetching: false,
  items: {
    tracks: [],
    artists: [],
    albums: [],
    playlists: []
  }
}

const results = ( state = initialResults, action) => {
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
      console.log(action.payload.err)
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

const currentTrack = (state='', action) => {
  switch (action.type) {
    case UPDATE_CURRENT_TRACK:
      return action.payload.id;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  searchContents,
  results,
  currentTrack,
  playing
})

export default rootReducer;

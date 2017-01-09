import { combineReducers } from 'redux';
import { REQUEST_SONGS, RECEIVE_SONGS, FAIL_RECEIVE_SONGS } from '../actions/actiontypes';
const initialState = {
  isFetching: false,
  items: {
    tracks: [],
    artists: [],
    albums: [],
    playlists: []
  }
}

const isFetching = (state = initialState.isFetching, action) => {
  switch (action.type) {
    case REQUEST_SONGS:
      return true;
    case RECEIVE_SONGS:
      return false;
    case FAIL_RECEIVE_SONGS:
      return false;
    default:
      return state;
  }
}

const items = (state = initialState.items, action) => {
  switch (action.type) {
    case REQUEST_SONGS:
      return state;
    case RECEIVE_SONGS:
      console.log(action.payload.tracks);
      return {
        tracks: action.payload.tracks
      }
    case FAIL_RECEIVE_SONGS:
      console.log(action.payload.err)
      return state;
    default:
      return state;
  }
}

const resultsReducer = combineReducers({
  isFetching,
  items
})

export default resultsReducer;

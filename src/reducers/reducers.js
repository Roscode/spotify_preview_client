import { combineReducers } from 'redux';
import { UPDATE_SEARCH_CONTENT,
  REQUEST_SONGS, RECEIVE_SONGS,
  FAIL_RECEIVE_SONGS, PLAY, PAUSE, UPDATE_CURRENT_TRACK
} from '../actions/actiontypes';

const searchContents = (state = '', action) => {
   switch (action.type) {
     case UPDATE_SEARCH_CONTENT:
       return action.payload.content;
     default:
       return state;
   }
}

const isFetching = (state = false, action) => {
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

const tracks = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_SONGS:
      return action.payload.tracks;
    default:
      return state;
   }
}

const tracksById = (state = {}, action) => {
   switch (action.type) {
     case RECEIVE_SONGS:
       return {
         ...state,
         [action.id]: tracks(state[action.id], action)
       }
     default:
       return state;
   }
}

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
const currentTrack = (state = '', action) => {
   switch (action.type) {
     case UPDATE_CURRENT_TRACK:
       return action.payload.id;
     default:
       return state;
   }
 }

const rootReducer = combineReducers({
  searchContents,
  isFetching,
  tracksById,
  tracks,
  currentTrack,
  playing
})

export default rootReducer;

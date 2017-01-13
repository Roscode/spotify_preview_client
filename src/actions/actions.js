import * as types from './actiontypes';
import search from '../utils/spotify';

export const updateSearchContent = (content) => {
  return {
    type: types.UPDATE_SEARCH_CONTENT,
    payload: { content }
  }
}

export const requestSongs = () => {
  return {
    type: types.REQUEST_SONGS,
  }
}

export const receiveSongs = (tracks) => {
  return {
    type: types.RECEIVE_SONGS,
    payload: { tracks }
  }
}

export const failReceiveSongs = (err) => {
  return {
    type: types.FAIL_RECEIVE_SONGS,
    payload: { err },
    error: true
  }
}

export const updateCurrentTrack = (id) => {
  return {
    type: types.UPDATE_CURRENT_TRACK,
    payload: { id },
  }
}

export const play = () => {
  return {
    type: types.PLAY
  };
}

export const pause = () => {
  return {
    type: types.PAUSE
  }
}

// const search = (query = '', itemType = 'track', limit = 5, offset = 0, market = 'US') => (
//   fetch(`https://api.spotify.com/v1/search?q=${query.replace(' ', '+')}&type=${itemType}&limit=${limit}&offset=${offset}&market=${market}`)
// )

export const fetchResults = (searchContents) => {
  return (dispatch) => {
    dispatch(requestSongs());
    return search(searchContents)
    .then(response => response.json())
    .then(json => json.tracks.items)
    .then(tracks => dispatch(receiveSongs(tracks)))
    .catch(err => dispatch(failReceiveSongs(err)));
  }
}

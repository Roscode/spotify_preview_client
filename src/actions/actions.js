import fetch from 'isomorphic-fetch';
// action types
export const UPDATE_SEARCH_CONTENT = 'UPDATE_SEARCH_CONTENT';


// action creators
export const updateSearchContent = (content) => {
  return {
    type: UPDATE_SEARCH_CONTENT,
    payload: { content }
  }
}

export const REQUEST_SONGS = 'REQUEST_SONGS';
export const requestSongs = () => {
  return {
    type: REQUEST_SONGS,
    payload: {},
  }
}

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const receiveSongs = (response) => {
  return {
    type: RECEIVE_SONGS,
    payload: {
      tracks: response.tracks.items
    }
  }
}

export const FAIL_RECEIVE_SONGS = 'FAIL_RECEIVE_SONGS';
export const failReceiveSongs = (err) => {
  return {
    type: FAIL_RECEIVE_SONGS,
    payload: err,
    error: true
  }
}

const buildAPIRequest = (search) => {
  return `https:/api.spotify.com/v1/search?q=${search.replace(/ /g, '+')}&type=track&limit=2`;
}

export const fetchResults = (searchContents) => {
  console.log('fetchResults was called');
  return (dispatch) => {
    dispatch(requestSongs());

    return fetch(buildAPIRequest(searchContents))
    .then(response => response.json())
    .then(json => dispatch(receiveSongs(json)))
    .catch(err => {
      console.log(err);
    });
  }
}

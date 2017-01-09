import playing from './playing';
import currentTrack from './currentTrack';
import results from './results';
import searchContents from './searchContents';
import rootReducer from './reducers';
import * as types from '../actions/actiontypes';


describe('reducers', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      currentTrack: '',
      playing: false,
      searchContents: '',
      results: {
        isFetching: false,
        items: {
          tracks: [],
          albums: [],
          artists: [],
          playlists: []
        }
      }
    })
  })
  it('should handle UPDATE_SEARCH_CONTENT', () => {
    expect(searchContents('song I lik', {
      type: types.UPDATE_SEARCH_CONTENT,
      payload: {
        content: 'song I like'
      }
    })).toEqual('song I like');
  });
  it('should handle REQUEST_SONGS', () => {
    expect(results({
      isFetching: false,
      items: {
        tracks: []
      }
    }, {
      type: types.REQUEST_SONGS
    })).toEqual({
      isFetching: true,
      items: {
        tracks: []
      }
    });
  });
  it('should handle RECEIVE_SONGS', () => {
    const sampleTracks = [{id:1}];
    expect(results({
      isFetching: true,
      items: {
        tracks: []
      }
    }, {
      type: types.RECEIVE_SONGS,
      payload: {
        tracks: sampleTracks
      }
    })).toEqual({
      isFetching: false,
      items: {
        tracks: sampleTracks
      }
    });
  });
  it('should handle FAIL_RECEIVE_SONGS', () => {
    expect(results({
      isFetching: true,
      items: {
        tracks: []
      }
    }, {
      type: types.FAIL_RECEIVE_SONGS,
      payload: {
        err: {
          msg: "I am an error"
        }
      }
    })).toEqual({
      isFetching: false,
      items: {
        tracks: []
      }
    });
  });
  it('should handle UPDATE_CURRENT_TRACK', () => {
    expect(currentTrack('', {
      type: types.UPDATE_CURRENT_TRACK,
      payload: {
        id: '5'
      }
    })).toEqual('5');
  });
  it('should handle PLAY', () => {
    expect(playing(false, {
      type: types.PLAY
    })).toEqual(true);
    expect(playing(true, {
      type: types.PLAY
    })).toEqual(true);
  });
  it('should handle PAUSE', () => {
    expect(playing(false, {
      type: types.PAUSE
    })).toEqual(false);
    expect(playing(true,  {
      type: types.PAUSE
    })).toEqual(false);
  })
})

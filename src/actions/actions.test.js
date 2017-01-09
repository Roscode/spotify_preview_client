import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import * as actions from './actions'
import * as types from './actiontypes'

describe('actions', () => {
  it('should create an action updating the search content', () => {
    const newContent = "This song I really like";
    const expectedAction = {
      type: types.UPDATE_SEARCH_CONTENT,
      payload: { content: newContent }
    };
    expect(actions.updateSearchContent(newContent)).toEqual(expectedAction);
  });
  it('should create an action updating the current track', () => {
    const ids = [3, 4634, 423, 674, 1243];
    ids.map(id => {
      expect(actions.updateCurrentTrack(id)).toEqual({
        type: types.UPDATE_CURRENT_TRACK,
        payload: {id}
      })
    })
  })
  it('should create a play action', () => {
    const expectedAction = {
      type: types.PLAY
    };
    expect(actions.play()).toEqual(expectedAction);
  })
  it('should create a pause action', () => {
    const expectedAction = {
      type: types.PAUSE
    };
    expect(actions.pause()).toEqual(expectedAction);
  });
});

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('should create an action representing that a search request was sent', () => {
    const expectedAction = {
      type: types.REQUEST_SONGS
    };
    expect(actions.requestSongs()).toEqual(expectedAction);
  })
  it('should create an action to receive the songs in the api response', () => {
    const responseTracks = [1, 2, 3, 4, 5].map((id) => {return {id}});
    const expectedAction = {
      type: types.RECEIVE_SONGS,
      payload: {
        tracks: responseTracks
      }
    }
    expect(actions.receiveSongs(responseTracks)).toEqual(expectedAction);
  });
  it('should create an action representing a failed api request', () => {
    const err = {
      purpose: "to pass the butter... oh god"
    }
    const expectedAction = {
      type: types.FAIL_RECEIVE_SONGS,
      payload: {err},
      error: true
    }
    expect(actions.failReceiveSongs(err)).toEqual(expectedAction);
  });
  it('creates a REQUEST_SONGS action on send and a RECEIVE_SONGS action on succesful receipt', () => {
    nock('https://api.spotify.com/')
    .get('/v1/search')
    .query(true)
    .reply(200, {tracks: {
      items: [{id:1}]
    }})
    const expectedActions = [
      { type: types.REQUEST_SONGS },
      {
        type: types.RECEIVE_SONGS,
        payload: {
          tracks: [{id:1}]
        }
      }
    ];
    const store = mockStore({
      results: {
        isFetching: false,
        items: []
      }
    });

    return store.dispatch(actions.fetchResults("hello"))
    .then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    })
  })
});

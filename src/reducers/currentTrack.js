import { UPDATE_CURRENT_TRACK }from '../actions/actiontypes';
const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_TRACK:
      return action.payload.id;
    default:
      return state;
  }
}

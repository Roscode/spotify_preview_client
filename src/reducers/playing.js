import { PLAY, PAUSE } from '../actions/actiontypes';
const initialState = false;

export default(state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      return true;
    case PAUSE:
      return false;
    default:
      return state;
    }
}

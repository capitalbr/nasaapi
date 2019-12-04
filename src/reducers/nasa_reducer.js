import { RECEIVE_ASTEROID_STATS } from "../actions/nasa_actions";

const nasaReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_ASTEROID_STATS:
      return action.data.data.contextWrites.to;
    default:
      return oldState;
  }
};

export default nasaReducer;
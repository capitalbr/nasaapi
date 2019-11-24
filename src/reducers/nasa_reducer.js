import { RECEIVE_DATA } from "../actions/nasa_actions";

const nasaReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_DATA:
      return action.data.data.contextWrites.to;
    default:
      return oldState;
  }
};

export default nasaReducer;
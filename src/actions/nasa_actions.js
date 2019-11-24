import * as APIutils from "../util/nasa_util";

export const RECEIVE_DATA = "RECEIVE_DATA"

export const fetchNasaData = (type) => {
  return dispatch => {
    return APIutils.getNasaData(type).then(data => dispatch({
        type: RECEIVE_DATA,
        data    
      }
    ))
  }
}
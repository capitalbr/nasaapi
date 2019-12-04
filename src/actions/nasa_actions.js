import * as APIutils from "../util/nasa_util";

export const RECEIVE_ASTEROID_STATS = "RECEIVE_ASTEROID_STATS"

export const fetchAsteroidStats = (type) => {
  return dispatch => {
    return APIutils.getAsteroidStats(type).then(data => dispatch({
        type: RECEIVE_ASTEROID_STATS,
        data    
      }
    ))
  }
}
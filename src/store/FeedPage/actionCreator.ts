import { Dispatch } from "redux";
import { getRandomFeeds } from "../../utils/api";
import { FEED_FAILURE, FEED_LOADING, FEED_SUCCESS } from "./actionType";

export function getFeedsData(pageNo = 1) {
  return async function(dispatch: Dispatch) {
    try {
      dispatch({ type: FEED_LOADING })

      const { data } = await getRandomFeeds();
      
      dispatch({ 
        type: FEED_SUCCESS,
        payload: { data }
      })
    } catch(error) {
      dispatch({ type: FEED_FAILURE })
      console.error(error);
    }
  }
}
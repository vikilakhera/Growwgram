import { FEED_FAILURE, FEED_LOADING, FEED_SUCCESS, ReducerAction } from "./actionType";
import { FeedData } from "../../utils/types";

const initialState = {
  isLoading: true,
  data: [] as FeedData[],
  hasError: false
}

export default function reducer(state = initialState, action: ReducerAction) {
  switch(action.type) {
    case FEED_LOADING:
      return {
        ...state,
        isLoading: true
      }
    
    case FEED_SUCCESS:
      return {
        ...state, 
        data: action.payload.data,
        isLoading: false,
        hasError: false
      }
    
    case FEED_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasError: true
      }
    
    default: 
      return state;
  }
}
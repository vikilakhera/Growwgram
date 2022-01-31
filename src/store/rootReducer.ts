import { combineReducers } from 'redux';
import feedPageReducer from './FeedPage/reducer';

export default combineReducers({
  feedPage: feedPageReducer
})
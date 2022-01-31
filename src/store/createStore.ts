import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import reduxThunk from 'redux-thunk';

// const middlewares = [ reduxThunk.withExtraArgument({ request: null }) ].filter(Boolean)

export default function createReduxStore() {
  return createStore(rootReducer, applyMiddleware(reduxThunk));
}
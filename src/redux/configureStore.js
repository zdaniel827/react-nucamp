import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Campsites } from "./campsites";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Partners } from "./partners";

export const configureStore = () => {
  const store = createStore(
    combineReducers({
      campsites: Campsites,
      comments: Comments,
      promotions: Promotions,
      partners: Partners
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};

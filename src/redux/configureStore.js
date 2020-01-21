import { createStore, combineReducers } from "redux";
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
    })
  );
  return store;
};

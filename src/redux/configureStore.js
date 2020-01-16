import { createStore } from "redux";
import { Reducer, initalState } from "./reducer";

export const configureStore = () => {
    const store = createStore(Reducer, initalState);
    return store;
}
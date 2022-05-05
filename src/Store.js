import { rootReducer } from "./Reducers/index";
import { createStore } from "redux";

export const store=createStore(rootReducer)

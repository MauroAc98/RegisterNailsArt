import { createStore, combineReducers } from "redux";
import { TurnReducer } from "./reducers/index";

const rootReducer = combineReducers({
    turns: TurnReducer
});

export default createStore(rootReducer);
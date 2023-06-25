import { createStore, combineReducers, applyMiddleware } from "redux";
import { TurnReducer, HoursReducer } from "./reducers/index";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    turns: TurnReducer,
    hours: HoursReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
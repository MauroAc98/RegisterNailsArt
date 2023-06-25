import { createStore, combineReducers, applyMiddleware } from "redux";
import { TurnReducer } from "./reducers/index";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    turns: TurnReducer
});

export default createStore(rootReducer, applyMiddleware(thunk));
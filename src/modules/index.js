import { combineReducers } from "redux";
import { increaseSaga, decreaseSaga } from "./sagas";
import { all } from "redux-saga/effects";
import { todoActionFunc } from "./action";

const rootReducer = combineReducers(todoActionFunc);
export function* rootSaga() {
  yield all([increaseSaga(), decreaseSaga()]);
}

export default rootReducer;

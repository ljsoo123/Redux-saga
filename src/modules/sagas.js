import { put } from "redux-saga/effects";
import { todoActionFunc } from "./action";

export function* increaseSaga() {
  yield console.log("increase saga");
  yield put(todoActionFunc.increase());
}

export function* decreaseSaga() {
  yield console.log("decrease saga");
  yield put(todoActionFunc.decrease());
}

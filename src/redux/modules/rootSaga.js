import { all } from "redux-saga/effects";
import { usersSaga } from "./users";

// 한데 모은 rootSaga가 완성 됨
export default function* rootSaga() {
  yield all([usersSaga()]);
}

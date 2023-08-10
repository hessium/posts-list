import { all, fork } from "redux-saga/effects";

import PostSaga from "./posts/saga";
import UserSaga from "./users/saga";

export default function* rootSaga() {
    yield all([fork(PostSaga, UserSaga)]);
}
import { takeEvery, put, call } from 'redux-saga/effects';
import {GET_COMMENTS, GET_POSTS, GET_USER} from '../constants';
import {setComments, setPosts, setUser} from '../actions/actionCreator';
import {fetchComments, fetchPosts, fetchUser} from '../../api/index';

export function* handlePosts() {
    const  data  = yield call(fetchPosts);
    yield put(setPosts(data));
}

export function* handleComments(action) {
    const  dataCom  = yield call(fetchComments, action.payload.postId);
    yield put(setComments(dataCom));
}

export function* handleUser(action) {
    const  data  = yield call(fetchUser, action.payload.userId);
    yield put(setUser(data));
}


export function* watchClickSaga() {
    yield takeEvery(GET_POSTS, handlePosts);
    yield takeEvery(GET_COMMENTS, handleComments)
    yield takeEvery(GET_USER, handleUser)
}

export default function* rootSaga() {
    yield watchClickSaga();
}
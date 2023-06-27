import { takeEvery, put, call } from 'redux-saga/effects';
import {GET_COMMENTS, GET_POSTS} from '../constants';
import {setComments, setPosts} from '../actions/actionCreator';
import {getComments, getPosts} from '../../api/index';

export function* handleLatestNews() {
    const  data  = yield call(getPosts, 'react');
    yield put(setPosts(data));
}
export function* handleComments() {
    const  data  = yield call(getComments());
    yield put(setComments(data));
}
export function* watchClickSaga() {
    yield takeEvery(GET_POSTS, handleLatestNews);
    yield takeEvery(GET_COMMENTS, handleComments);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
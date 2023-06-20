import { takeEvery, call, put} from 'redux-saga/effects';
import { GET_POSTS} from "../constants";
import { getAllPosts} from '../../Api/index';
import { setPostsAll } from '../actions/actionCreator';


export function* handleAllPosts() {
    const {data} = yield call(getAllPosts);
    yield put(setPostsAll(data))
}

export function* watchClickSaga() {
    yield takeEvery(GET_POSTS, handleAllPosts);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
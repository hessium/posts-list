import { takeLatest, put, call } from "redux-saga/effects";

import { GET_USERS, GET_USER_DETAILS} from "./actionTypes";

import {
    getUsersSuccess,
    getUsersFail,
    getUserDetailsFail,
    getUserDetailsSuccess,
} from "./actions";

import {  getUsers,  getUserDetails } from "../../helpers/backend_helper";

function* onGetUsers() {
    try {
        const response = yield call(getUsers);
        yield put(getUsersSuccess(response));
    } catch (error) {
        yield put(getUsersFail(error.response));
    }
}

function* onGetUserDetails({ payload: id }) {
    try {
        const response = yield call(getUserDetails, id);
        yield put(getUserDetailsSuccess(response));
    } catch (error) {
        yield put(getUserDetailsFail(error.response));
    }
}

function* CartSagaTwo() {
    yield takeLatest(GET_USERS, onGetUsers);
    yield takeLatest(GET_USER_DETAILS, onGetUserDetails);
}

export default CartSagaTwo;
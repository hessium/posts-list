import {
    GET_USERS,
    GET_USERS_FAIL,
    GET_USERS_SUCCESS,
    GET_USER_DETAILS,
    GET_USER_DETAILS_FAIL,
    GET_USER_DETAILS_SUCCESS,
} from "../users/actionTypes";

export const getUsers = () => {
    return {
        type:  GET_USERS,
    };
};

export const getUsersSuccess = (users) => {
    return {
        type:GET_USERS_SUCCESS,
        payload: users,
    };
};

export const getUsersFail = (error) => {
    return {
        type:  GET_USERS_FAIL,
        payload: error,
    };
};

export const getUserDetails = (id) => {
    return {
        type: GET_USER_DETAILS,
        payload: id,
    };
};

export const getUserDetailsSuccess = (user) => {
    return {
        type: GET_USER_DETAILS_SUCCESS,
        payload: user,
    };
};

export const getUserDetailsFail = (error) => {
    return {
        type: GET_USER_DETAILS_FAIL,
        payload: error,
    };
};
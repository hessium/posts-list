import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    GET_USER_DETAILS,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAIL
} from "./actionTypes";

const initialState = {
    users: [],
    user: {},
    loadingUsers: false,
    loadingUserDetails: false,
    error: {
        message: "",
    },
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            state = { ...state, loadingUsers: true };
            break;
        case GET_USERS_SUCCESS:
            state = { ...state, users: action.payload, loadingUsers: false };
            break;
        case GET_USERS_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error",
                },
                loadingPosts: false,
            };
            break;
        case GET_USER_DETAILS:
            state = { ...state, loadingUserDetails: true };
            break;
        case GET_USER_DETAILS_SUCCESS:
            state = { ...state, user: action.payload[0], loadingUserDetails: false };
            break;
        case GET_USER_DETAILS_FAIL:
            state = {
                ...state,
                error: {
                    message: "Error",
                },
                loadingUserDetails: false,
            };
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
};

export default UserReducer;
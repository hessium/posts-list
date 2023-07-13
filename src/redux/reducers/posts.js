import {SET_COMMENTS, SET_POSTS, SET_USER} from "../constants";

const initialState = {
    posts: [],
    comments: [],
    user: [],
};

const posts = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_POSTS:
            return {
                ...state,
                posts: [...state.posts, ...payload],
            };
        case SET_COMMENTS:
            return {
                ...state,
                comments: payload ,
            };
        case SET_USER:
            return {
                ...state,
                user: payload ,
            };
        default: return state;
    }
};

export default posts;
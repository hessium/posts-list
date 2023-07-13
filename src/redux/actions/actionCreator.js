import {SET_POSTS, GET_POSTS, SET_COMMENTS, GET_COMMENTS, GET_USER, SET_USER} from "../constants";

export const setPosts = (payload) => ({
    type: SET_POSTS,
    payload,
});

export const setComments = (payload) => ({
    type: SET_COMMENTS,
    payload,
});

export const getPosts = ( payload) => ({
    type: GET_POSTS,
    payload,
});
export const getComments = ( postId) => ({
    type: GET_COMMENTS,
    payload: {postId}
});

export const setUser = (  payload) => ({
    type: SET_USER,
    payload,
});

export const getUser = ( userId) => ({
    type: GET_USER,
    payload:  userId,

});
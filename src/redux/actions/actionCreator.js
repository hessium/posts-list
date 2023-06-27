import {SET_POSTS, GET_POSTS, SET_COMMENTS, GET_COMMENTS} from "../constants";


export const getPosts = ( payload) => ({
    type: GET_POSTS,
    payload,
});

export const setPosts = (payload) => ({
    type: SET_POSTS,
    payload,
});

export const getComments = ( payload) => ({
    type: GET_COMMENTS,
    payload,
});
export const setComments = (payload) => ({
    type: SET_COMMENTS,
    payload,
});
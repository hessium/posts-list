import { GET_POSTS, SET_POSTS} from "../constants";

export const getPostsAll = () => ({
    type: GET_POSTS,
});

export const setPostsAll = (payload) => ({
    type: SET_POSTS,
    payload,
});
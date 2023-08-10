import { get } from "./api_helper";
import * as url from "./url_helper";

export const getPosts = () => get(url.GET_POSTS);

export const getPostDetails = (id) =>
    get(url.GET_POST_DETAILS, {
        params: {
            id: id,
        },
    });

export const getUsers = () => get(url.GET_USERS);

export const getUserDetails = (user) =>
    get(url.GET_USER_DETAILS, {
        params: {
            user: user,
        },
    });
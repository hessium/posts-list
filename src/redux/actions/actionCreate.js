import {SET_POST, GET_POST} from "../constants";

export const getPost = () => ({
	type: GET_POST,
});

export const setPost = () => ({
	type: SET_POST,
})

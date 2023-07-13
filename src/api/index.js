import axios from "axios";

export const fetchPosts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return  await res.data;
};

export const fetchComments = async (postId) => {
    const res = await  axios.get(`https://jsonplaceholder.typicode.com/post/${postId}/comments`);
    return await res.data;
};

export const fetchUser = async (userId) => {
    const res = await  axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return await res.data;
};


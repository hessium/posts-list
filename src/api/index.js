import axios from "axios";

export const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data)
    return response.data;
};

export const getPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return  response.data;
};


export const getComments = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/post/1/comments`);
    return  response.data;
};

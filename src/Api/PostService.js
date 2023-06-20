import axios from "axios";

    const url = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default class PostService {
    static async getAll(limit = 10, page = 1, ) {
            let postsRes = await url
                .get('/posts', {
                    params: {
                        _limit: limit,
                        _page: page
                    }
                })
            return postsRes;
    }
    
    static  async getComments(post_id) {
        const commentsRes = await url
            .get(`/post/${post_id}/comments`)
        return commentsRes;
    }
    
    static async getUser(user_id) {
        const usersRes = await url
        return usersRes;
    }
    
}
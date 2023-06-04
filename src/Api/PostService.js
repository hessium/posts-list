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

           /* const postsRes = await axios.get(`${url}`, {
                params: {
                    _limit: limit,
                    _page: page,
                    _mail: mail
                }
            })*/
          /*  const usersRes = await axios.get('https://jsonplaceholder.typicode.com/users', {
            })
            const commentsRes = await  axios.get('https://jsonplaceholder.typicode.com/comments',{
            })
            const postsData = postsRes.data;
            const usersData = usersRes.data;
            const commentsData = commentsRes.data;

            //объединение постов и юзеров
            for(let i = 0; i < postsData.length; i++) {
                let postId = postsData[i].userId;
                for(let j = 0; j < usersData.length; j++) {
                    let userId = usersData[j].id
                    if(userId === postId) {
                        postsData[i].name = usersData[j].name;
                        postsData[i].username = usersData[j].username;
                    }
                }
            }

            //объединение постов и комментариев
            for(let y = 0; y < postsData.length; y++) {
                let postIds = postsData[y].id;
                postsData[y].comments = [];
                for(let x = 0; x < commentsData.length; x++) {
                    let commentsId = commentsData[x].postId;
                    if( commentsId === postIds) {
                        postsData[y].comments.push({
                            'com' : commentsData[x].name,
                            'email' : commentsData[x].email,
                            'postID' : commentsId
                        })
                    }
                }
            }*/

            return postsRes;
    }

    static async getAllUsers(id) {
        const usersRes = await url
            .get(`/posts?userId=${id}`)
        return usersRes;
    }
}
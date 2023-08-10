import React from 'react';
import PostItem from "./PostItem";
import axios from "axios";
const  PostList = ({posts}) =>  {

    async function getsPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data)
        return response
    }


    if(!posts.length ) {
        return (
            <div>
                <h1 className="title">
                    Постов нет
                </h1>
                <button onClick={getsPosts}>Rkbr</button>
            </div>
        )
    }
    return (
        <div className='container'>
            <div className="row">

                {posts.map((post, index) =>
                    <PostItem post={post} key={index} />
                )}
            </div>
        </div>
    );
}

export default PostList;
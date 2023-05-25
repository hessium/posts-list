import React from 'react';
import PostItem from "./PostItem";

const  PostList = ({posts, users}) =>  {
    return (
        <div className='container'>
            <div className="row">
                {posts.map((post) =>
                    <PostItem post={post} key={post.id} />
                )}
            </div>
        </div>
    );
}

export default PostList;
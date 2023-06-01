import React from 'react';
import PostItem from "./PostItem";

const  PostList = ({posts}) =>  {
    if(!posts.length ) {
        return (
            <h1 className="title">
                Постов нет
            </h1>
        )
    }
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
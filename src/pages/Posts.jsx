import PostList from "../components/posts/PostList";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getPosts} from "../store/posts/actions";
import {getUsers} from "../store/users/actions";

function Posts() {
    const { posts, loadingPosts } = useSelector((state) => state.PostReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);


    return (
        <div className="App">
            {
                loadingPosts ?
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                        </div>
                    </div>
                    : <PostList posts={posts} />
            }
        </div>

    );
}

export default Posts;

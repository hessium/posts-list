import PostList from "../components/posts/PostList";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../redux/actions/actionCreator";
import React, {useEffect, useState} from "react";
import Spinner from "react-bootstrap/Spinner";

function Posts() {
    const posts = useSelector(store => store?.posts?.posts  || []);
    const [isLoader, setIsLoader] = useState(true)
    const dispatch = useDispatch();

    const  loaderDestroy = () => {
        setTimeout(()=> {
           setIsLoader(false)
        }, 2000)
    }

    useEffect(()=> {
        dispatch(getPosts())
        loaderDestroy()
    }, [dispatch])

    return (
        <div className="App">
            {isLoader
            ? <Spinner animation="border" variant="primary" />
            : <PostList posts={posts}/>}
        </div>

    );
}

export default Posts;

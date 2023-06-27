import PostList from "../components/posts/PostList";
import {useDispatch, useSelector} from "react-redux";
import {  getPosts } from "../redux/actions/actionCreator";
import {useEffect} from "react";


function Posts() {
   const posts = useSelector(store => store?.news?.posts  || []);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPosts())
    }, [dispatch])
    return (
        <div className="App">
            {<PostList posts={posts}/>}
        </div>

    );
}

export default Posts;

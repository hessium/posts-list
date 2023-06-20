import {useState, useEffect} from "react";
import Spinner from 'react-bootstrap/Spinner';
import PostList from "../components/posts/PostList";
import PostFilter from "../components/PostFilter";
import {usePosts} from "../hooks/usePosts";
import PostService from "../Api/PostService";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import MyPagination from "../components/Ui/pagination/MyPagination";
import {useSelector, useDispatch} from "react-redux";
import {getPostsAll} from "../store/actions/actionCreator";


function Posts() {
    /*const [posts, setPosts] = useState([]);
    const [filter,setFilter] = useState({sort: '', query: ''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchQueryPosts = usePosts(posts, filter.sort, filter.query);


    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts();
    }, [page])*/


    const posts = useSelector(store => store?.posts?.posts || [])
    console.log(posts)
    const dispatch = useDispatch();
   /* useEffect(() => {
        dispatch(getPostsAll())
    })*/
    const handlePost = () => {
        dispatch(getPostsAll())
    }
    return (
        <div className="App">
            <button onClick={handlePost}>
                GET
            </button>
            {<PostList posts={posts}/>}

        </div>

    );
}

export default Posts;

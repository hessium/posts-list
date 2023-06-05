import {useState, useEffect} from "react";
import Spinner from 'react-bootstrap/Spinner';
import PostList from "../components/posts/PostList";
import PostFilter from "../components/PostFilter";
import {usePosts} from "../hooks/usePosts";
import PostService from "../Api/PostService";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import MyPagination from "../components/Ui/pagination/MyPagination";

function Posts() {
    const [posts, setPosts] = useState([]);
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
    }, [page])

    const changePage= (page) => {
        setPage(page)
    }
    return (
        <div className="App">
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError && <h1>Произошла ошибка ${postError}</h1>}
            {isPostsLoading
                ?  <Spinner animation="border" variant="primary" />
                : <PostList posts={sortedAndSearchQueryPosts}/>
            }
            <MyPagination page={page}
                          changePage={changePage}
                          totalPages={totalPages} />
        </div>
    );
}

export default Posts;

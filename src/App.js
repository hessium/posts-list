import './App.css';
import {useState, useEffect, useMemo} from "react";
import PostList from "./components/posts/PostList";
import PostFilter from "./components/PostFilter";
import {usePosts} from "./hooks/usePosts";
import PostService from "./Api/PostService";
import Spinner from 'react-bootstrap/Spinner';
import {useFetching} from "./hooks/useFetching";

function App() {
    const [posts, setPosts] = useState([]);
    const [filter,setFilter] = useState({sort: '', query: ''});
    const [totalCount, setTotalCount] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        setTotalCount(response.headers['x-total-count'])
    })

    useEffect(() => {
        fetchPosts();
    }, [])

    const sortedAndSearchQueryPosts = usePosts(posts, filter.sort, filter.query)

    return (
        <div className="App">
            <div className='container'>
                <header className="App-header">
                    <h1>Список постов</h1>
                </header>
                <PostFilter filter={filter} setFilter={setFilter}/>
            </div>
            {postError && <h1>Произошла ошибка ${postError}</h1>}
            {isPostsLoading
                ?  <Spinner animation="border" variant="primary" />
                : <PostList posts={sortedAndSearchQueryPosts}/>
            }
        </div>
    );
}

export default App;

import './App.css';
import {useState, useEffect, useMemo} from "react";
import PostList from "./components/posts/PostList";
import PostFilter from "./components/PostFilter";
import {usePosts} from "./hooks/usePosts";
import PostService from "./Api/PostService";
import Spinner from 'react-bootstrap/Spinner';
import {useFetching} from "./hooks/useFetching";
import {getPageCount} from "./utils/pages";

function App() {
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
    }, [])

   

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

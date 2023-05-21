import './App.css';
import axios from 'axios';
import {useState, useEffect} from "react";
import PostItem from "./components/posts/PostItem";

function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchPosts()
        console.log("useEffect")
    }, [])

  async function fetchPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        })
        setPosts(response.data)
   }

  return (
    <div className="App">
      <header className="App-header">

      </header>
        <div className='container'>
           <div className="row">
               {posts.map((post) =>
                   <PostItem post={post} />
               )}
           </div>
        </div>
    </div>
  );
}

export default App;

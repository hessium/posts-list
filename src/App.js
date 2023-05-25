import './App.css';
import axios from 'axios';
import {useState, useEffect} from "react";
import PostList from "./components/posts/PostList";

function App() {
    const [posts, setPosts] = useState([]);
    const [users, setUSers] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, [])

  async function fetchPosts() {
        const postsRes = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        })
        const usersRes = await axios.get('https://jsonplaceholder.typicode.com/users', {
        })

      const postsData = postsRes.data;
      const usersData = usersRes.data;
      const result = []
      for(let i = 0; i < postsData.length; i++) {
            //console.log(postsData[i].body)
          let postId = postsData[i].userId;
          for(let j = 0; j < usersData.length; j++) {
              //console.log(usersData[j].name)
              let userId = usersData[j].id
              if(userId === postId) {
                  postsData[i].name = usersData[j].name;
                  postsData[i].username = usersData[j].username;
              }
          }
      }
      console.log(postsData)
      setPosts(postsData)
      setUSers(usersData)
   }


  return (
    <div className="App">
      <header className="App-header">
      </header>
        <PostList posts={posts} users={users}/>
    </div>
  );
}

export default App;

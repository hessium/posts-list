import './App.css';
import axios from 'axios';
import {useState, useEffect} from "react";
import PostList from "./components/posts/PostList";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, [])

  async function fetchPosts() {
        const postsRes = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        })
        const usersRes = await axios.get('https://jsonplaceholder.typicode.com/users', {
        })
        const commentsRes = await  axios.get('https://jsonplaceholder.typicode.com/comments',{
        })
      const postsData = postsRes.data;
      const usersData = usersRes.data;
      const commentsData = commentsRes.data;

      //объединение постов и юзеров
      for(let i = 0; i < postsData.length; i++) {
          let postId = postsData[i].userId;
          for(let j = 0; j < usersData.length; j++) {
              let userId = usersData[j].id
              if(userId === postId) {
                  postsData[i].name = usersData[j].name;
                  postsData[i].username = usersData[j].username;
              }
          }
      }

      //объединение постов и комментариев
      for(let y = 0; y < postsData.length; y++) {
          let postIds = postsData[y].id;
          postsData[y].comments = [];
          for(let x = 0; x < commentsData.length; x++) {
              let commentsId = commentsData[x].postId;
              if( commentsId === postIds) {
                  postsData[y].comments.push({
                      'com' : commentsData[x].name,
                      'email' : commentsData[x].email,
                      'postID' : commentsId
                  })

              }
          }
      }
      setPosts(postsData)
      console.log(postsData)
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <div>
            <select>
                <option value="">
                    По названию
                </option>
            </select>
        </div>
        {
            posts.length
                ?
                    <PostList posts={posts}/>
                :
                <h2>Посты не найдены</h2>
        }
    </div>
  );
}

export default App;

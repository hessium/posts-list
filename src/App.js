import './App.css';
import axios from 'axios';
import {useState, useEffect, useMemo} from "react";
import PostList from "./components/posts/PostList";
import MySelect from "./components/Ui/select/MySelect";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function App() {
    const [posts, setPosts] = useState([]);
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

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
  }

    const sortedPosts = useMemo(() => {
        console.log('отработала')
        if(selectedSort) {
            return [...posts].sort((a, b) =>
                a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }, [selectedSort, posts])

    const sortedAndSearchQuery = useMemo(() => {
        return sortedPosts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }

  return (
    <div className="App">
        <div className='container'>
            <header className="App-header">
                <h1>Список постов</h1>
            </header>
            <InputGroup className="mb-3">
                <InputGroup.Text
                    >
                    Поиск
                </InputGroup.Text>
                <Form.Control
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    id="inputGroup-sizing-default"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По тексту'},
                    {value: 'name', name: 'По имени'},
                ]}
            />
        </div>
        {
            sortedAndSearchQuery.length
                ?
                    <PostList posts={sortedAndSearchQuery}/>
                :
                <h2 className='title'>Посты не найдены</h2>
        }
    </div>
  );
}

export default App;

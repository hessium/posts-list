import {useSelector} from "react-redux";

function Posts() {
   
    const posts = useSelector(store => store.posts)
    console.log(posts)
    
    return (
        <div className="App">
        
        </div>
    );
}

export default Posts;

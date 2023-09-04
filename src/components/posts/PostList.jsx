import React from 'react';
import PostItem from "./PostItem";
import axios from "axios";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const  PostList = ({posts}) =>  {

    async function getsPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log(response.data)
        return response
    }


    if(!posts.length ) {
        return (
            <div>
                <h1 className="title">
                    Постов нет
                </h1>
                <button onClick={getsPosts}>Rkbr</button>
            </div>
        )
    }
    return (
        <div className='container'>
            <div className="row">
                <div className='filter'>
                    <DropdownButton id="dropdown-basic-button" title="Сортировка">
                        <Dropdown.Item >По тексту</Dropdown.Item>
                        <Dropdown.Item >По названию</Dropdown.Item>
                    </DropdownButton>
                </div>
                {posts.map((post, index) =>
                    <PostItem post={post} key={index} />
                )}
            </div>
        </div>
    );
}

export default PostList;
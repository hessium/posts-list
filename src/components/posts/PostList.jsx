import React, {useState} from 'react';
import PostItem from "./PostItem";
import MySelect from "../Ui/select/MySelect";
const  PostList = ({posts}) =>  {

    const [selectedSort, setSelectedSort] = useState('')


    const sortPosts = (sort) => {
        setSelectedSort(sort)
        const postList = posts.sort((a, b) => a[sort].localeCompare(b[sort]))
        return postList;
    }

    if(!posts.length ) {
        return (
            <div>
                <h1 className="title">
                    Постов нет
                </h1>
            </div>
        )
    }



    return (
        <div className='container'>
            <div className="row">
                <div className='sort'>
                    <MySelect
                        value={selectedSort}
                        onChange={sortPosts}
                        defaultValue="Сортировка"
                        options={[
                            {value: "title", name:"По названию"},
                            {value: "body", name:"По тексту"}
                        ]}
                    >
                    </MySelect>
                </div>
                {posts.map((post, index) =>
                    <PostItem post={post} key={index} />
                )}
            </div>
        </div>
    );
}

export default PostList;
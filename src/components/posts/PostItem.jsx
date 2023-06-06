import React, {useEffect, useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import PostService from "../../Api/PostService";
import {useFetching} from "../../hooks/useFetching";
import Spinner from "react-bootstrap/Spinner";
import PostComments from "./PostComments";

const  PostItem = ({post, userId, id}) =>  {
    const [comments, setComments] = useState([]);
    
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
        const response = await PostService.getComments(id);
        setComments(response.data);
    })
    
    return (
          <div key={post.id} className="col-md-12">
              <div className="media g-mb-30 media-comment">
                  <Link to='/user'>
                      <img className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                           src="https://bootdey.com/img/Content/avatar/avatar7.png" alt={post.name}/>
                  </Link>
                      <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                          <div className="g-mb-15">
                              <a href="#">
                                  <h5 className="h5 g-color-gray-dark-v1 mb-0">{post.name}</h5>
                              </a>
                          </div>
                          <h4>{post.title}</h4>
                          <p>{post.body}</p>
                          <Accordion >
                              <Accordion.Item eventKey="0">
                                  <Accordion.Header  onClick={() => fetchComments(id)}>Comments</Accordion.Header>
                                 <div className='accordion-wrapper'>
                                     {commentsError && <h1>Произошла ошибка ${commentsError}</h1>}
                                     {isCommentsLoading
                                         ? <Spinner className='spinner' animation="border" variant="primary" />
                                         : <PostComments comments={comments} />
                                     }
                                 </div>
                              </Accordion.Item>
                          </Accordion>
                      </div>
                  <div>

                  </div>
              </div>
          </div>
    );
}

export default PostItem;
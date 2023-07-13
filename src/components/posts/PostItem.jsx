import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import PostComments from "./PostComments";
import {getComments, getUser} from "../../redux/actions/actionCreator";

const  PostItem = ({post}) =>  {
    const comments = useSelector(store => store?.posts?.comments  || []);
    const dispatch = useDispatch();

    const handleComments = (postId) => {
        console.log(postId)
        dispatch(getComments(postId))
    }
    const handleUser = (userId) => {
        console.log(userId)
        dispatch(getUser(userId))
    }
    return (
          <div key={post.id} className="col-md-12">
              <div className="media g-mb-30 media-comment">
                  <Link to='/user' onClick={e => handleUser(post.userId)}>
                      <img className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                           src="https://bootdey.com/img/Content/avatar/avatar7.png" />
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
                                  <Accordion.Header onClick={e => handleComments(post.id)} >Comments</Accordion.Header>
                                  <Accordion.Body>
                                      <PostComments comments={comments} />
                                  </Accordion.Body>
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
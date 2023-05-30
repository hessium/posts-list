import React, {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';

const  PostItem = ({post, }) =>  {
    const [comments, setPosts] = useState([]);


    return (
          <div key={post.id} className="col-md-8">
              <div className="media g-mb-30 media-comment">
                  <a href="#">
                      <img className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                           src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Image Description" />
                  </a>
                      <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                          <div className="g-mb-15">
                              <a href="">
                                  <h5 className="h5 g-color-gray-dark-v1 mb-0">{post.name}</h5>
                              </a>
                          </div>
                          <p>{post.body}</p>
                          <Accordion >
                              <Accordion.Item eventKey="0">
                                  <Accordion.Header>Comments</Accordion.Header>
                              {
                                  (post.comments).map((text) =>
                                      <Accordion.Body key={'comment' + text.com}>
                                          <h4>{text.email}</h4>
                                         <p >{text.com}</p>
                                      </Accordion.Body>
                                  )
                              }
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
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";

const  PostItem = ({post}) =>  {

    return (
          <div className="col-md-12">
                  <div className="media g-mb-30 media-comment">
                      <Link to={`/user/${post.userId}`}>
                          <img className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                               src="https://bootdey.com/img/Content/avatar/avatar7.png"  alt="person"/>
                      </Link>

                      <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
                          <div className="g-mb-15">
                              <Link to={`/${post.id}`}>
                                  <h5 className="h5 g-color-gray-dark-v1 mb-0">{post.name}</h5>
                                  <h4>{post.title}</h4>
                          </Link>
                          </div>

                          <p>{post.body}</p>
                          <Accordion >
                              <Accordion.Item eventKey="0">
                                  <Accordion.Header >Comments</Accordion.Header>
                                  <Accordion.Body>
                                      dgfd
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
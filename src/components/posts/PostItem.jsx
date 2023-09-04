import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {Link} from "react-router-dom";

const  PostItem = ({post}) =>  {

    return (
          <div className="col-md-12">
                  <div className="media g-mb-30 media-comment">
                      <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30 ">
                          <div className="g-mb-15">
                              <Link to={`/${post.id}`}>
                                  <h5 className="h5 g-color-gray-dark-v1 mb-0">{post.name}</h5>
                                  <h4>{post.title}</h4>
                          </Link>
                          </div>
                          <p>{post.body}</p>
                      </div>
                      <div>

                      </div>
                  </div>

          </div>
    );
}

export default PostItem;
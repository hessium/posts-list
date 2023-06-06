import React, { useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';
import axios from "axios";

const  PostItem = ({post, id}) =>  {
    const [comments, setComments] = useState([]);
 
    async function fetchComments(id){
        const res = await axios.get(`https://jsonplaceholder.typicode.com/post/${id}/comments`)
        setComments(res.data)
        console.log(res.data)
    }
    return (
          <div   key={post.id} className="col-md-12">
              <div className="media g-mb-30 media-comment">
                  <a href="#">
                      <img className="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15"
                           src="https://bootdey.com/img/Content/avatar/avatar7.png" alt={post.name}/>
                  </a>
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
                                  {
                                      comments.map((com) =>
                                          <Accordion.Body key={com.id}>
                                              <h4>
                                                  {com.email}
                                              </h4>
                                             <p>
                                                 {com.body}
                                             </p>
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
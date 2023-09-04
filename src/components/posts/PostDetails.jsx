import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const  PostDetails = () => {
    const { post, loadingPostDetails } = useSelector(
        (state) => state.PostReducer
    );

    return (
        <Container>
            {loadingPostDetails ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            ) : (
                <Row className="posts-detail">
                    <Col lg={8} md={10} sm={12}>
                        <h1>{post.title}</h1>
                        <div>{post.body}</div>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default PostDetails;
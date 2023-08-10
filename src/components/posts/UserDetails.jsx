import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const  UserDetails = () => {
    const { user, loadingUserDetails } = useSelector(
        (state) => state.UserReducer
    );

    return (
        <Container>
            {loadingUserDetails ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                    </div>
                </div>
            ) : (
                <Row className="posts">
                    <Col lg={8} md={10} sm={12}>
                        <h1>{user.name}</h1>
                        <div>{user.username}</div>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default UserDetails;
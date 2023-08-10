import {useEffect} from 'react';
import { Container } from "react-bootstrap";
import UserDetails from "../components/posts/UserDetails";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {getUserDetails} from "../store/users/actions";


const User = () => {
    let params = useParams();
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserDetails(params.user));
    }, [params.user]);


    return (
        <Container className="single-post">
            <h1> FD</h1>
            <UserDetails />
        </Container>
    );
};

export default User;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiMenuBurger } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const MyBurger = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                <CiMenuBurger/>
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='header-list'>
                        <Link to="/about">Обо мне</Link>
                        <Link to="/">Посты</Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default MyBurger;
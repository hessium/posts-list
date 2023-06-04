import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CiMenuBurger } from 'react-icons/ci';


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
                        <a href="#">Обо мне</a>
                        <a href="#">Список постов</a>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default MyBurger;
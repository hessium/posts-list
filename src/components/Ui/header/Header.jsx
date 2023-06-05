import React from 'react';
import MyBurger from "../burger/MyBurger";

const Header = () => {
    return (
            <header className="header">
                <MyBurger/>
                <h1>Список постов</h1>
            </header>
    );
};

export default Header;
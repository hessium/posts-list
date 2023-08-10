import React from "react";
import './App.css';
import {
    Routes,
    Route
} from 'react-router-dom';
import About from "./pages/About";
import Posts from "./pages/Posts";
import Header from "./components/Ui/header/Header";
import SinglePost from "./pages/SinglePost";
import User from "./pages/User";


function App() {
    return (
        <div className='container'>
            <Header/>
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/" element={<Posts/>} />
                <Route path="/:id" element={<SinglePost />} />
                <Route path="user/:user" element={<User />} />
            </Routes>
        </div>
    )
}

export default App;

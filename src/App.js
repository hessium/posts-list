import React from "react";
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import About from "./pages/About";
import Posts from "./pages/Posts";
import User from "./pages/User";
import Header from "./components/Ui/header/Header";

function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Header/>
                  <Routes>
                      <Route path="/about" element={<About/>} />
                      <Route path="/" element={<Posts/>} />
                      <Route path="/user" element={<User/>} />
                  </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;

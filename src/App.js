import React from "react";
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Switch
} from 'react-router-dom';
import About from "./pages/About";
import Posts from "./pages/Posts";
import Header from "./components/Ui/header/Header";

function App() {
    return (
        <div className='container'>
            <BrowserRouter>
                <Header/>
                  <Routes>
                      <Route path="/about" element={<About/> } />
                      <Route path="/" element={<Posts/> } />
                  </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;

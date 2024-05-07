import React, { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import { Admin, About, Blog, BlogPage } from '../pages';

import { getPosts } from '../util';
import backgroundImage from '../assets/background.jpg';
import './index.css';


import './index.css';

const Index = () => {

    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState({})

    useEffect(() => {
        getPosts()
            .then(data => {
                // console.log(data);
                setPosts(data);
            })
            .catch(error => {
                console.log("Error fetching posts: ", error);
            })
    }, []);


  return (
    <div className='app-container'>
        <BrowserRouter>
            <img src={backgroundImage} alt='Link and the Great Deku Tree' className='background-image' />
            <div className='route-box'>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Blog posts={posts} setSelectedPost={setSelectedPost} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/blog/:postTitle" element={<BlogPage />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    </div>
  )
}

export default Index
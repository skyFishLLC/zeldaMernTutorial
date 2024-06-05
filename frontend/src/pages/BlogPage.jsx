import React, { useEffect } from 'react';

import './BlogPage.css';
import { getImageUrl, isEmptyObject, scrollToTop } from '../util';
import { useParams, Link } from 'react-router-dom';
import { leftArrow, rightArrow } from '../assets';

const BlogPage = ({ post, posts, setSelectedPost, loadPost }) => {
  
    const { postTitle } = useParams();

    useEffect(() => {
        loadPost(postTitle);
    }, [postTitle, posts]);
  
  if(post === undefined || post.title === undefined || isEmptyObject(post)){
    return(<>404 Article Not Found</>)
  } else {

    const currentIndex = posts.findIndex(currentPost => currentPost._id === post._id);

    if(currentIndex === -1){
        return {nextPost: null, prevPost: null};
    }

    const totalPosts = posts.length;
    const nextIndex = (currentIndex + 1) % totalPosts;
    const prevIndex = (currentIndex -1 + totalPosts) % totalPosts;

    const nextPost = posts[nextIndex];
    const prevPost = posts[prevIndex];

    return (
        <div className='flex-box'>
            <div className='blogpost-inner-container'>
                <p className='blogpost-title'>{post.title}</p>
                <img className='blogpost-cover' src={getImageUrl(post.imagePath)} />
                <div className='blogpost-content' dangerouslySetInnerHTML={{ __html: post.content }}/>
                <div className='blogpost-bottom-nav'>
                    <div className='left-arrow-box'>
                         {/* <a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a> */}
                         <img src={leftArrow} alt='previous game' className='left-arrow arrow' onClick={() => {setSelectedPost(prevPost); scrollToTop()}} />
                    </div>
                    <Link className='nav-item-box blogpost-all-link' onClick={scrollToTop} to='/' >
                        <div className='nav-triangle'></div>
                        <span className='nav-link'>All</span>
                    </Link>
                    <div className='right-arrow-box'>
                         {/* <a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Freepik - Flaticon</a> */}
                         <img src={rightArrow} alt='next game' className='right-arrow arrow' onClick={() => {setSelectedPost(nextPost); scrollToTop()}} />
                    </div>
                </div>
            </div>
        </div>
      )
  }
  
}

export default BlogPage
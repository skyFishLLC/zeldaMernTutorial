import React, { useState }  from 'react';
import 'aos/dist/aos.css';
import './Blog.css';
import { GameCard } from '../components';

const Blog = ({ posts, setSelectedPost }) => {

    const [currentFilter, setCurrentFilter] = useState('All');


    if(!posts){
        return(<></>);
    } else {

        const uniqueSystemSet = new Set();
        posts.forEach(post => {
            uniqueSystemSet.add(post.system);
        });
        const filters = [...uniqueSystemSet];
        filters.unshift("All");

        const filteredPosts = currentFilter === 'All' ? posts : posts.filter(post => post.system === currentFilter);

        return (
            <div className='blog-posts-outer-box'>
                <div className='blog-posts-container'>
                    <div className='filter-box'>
                        {filters.map(filter => {
                            return(
                                <span
                                    key={filter}
                                    className={`system-filter ${filter === currentFilter ? "selected-filter": ""}`}
                                    data-aos="fade-down"
                                    onClick={() => {setCurrentFilter(filter)}}
                                >
                                    {filter}
                                </span>
                            )
                        })}
                    </div>
                    {filteredPosts.map(post => {
                        return(
                            <GameCard post={post} setSelectedPost={setSelectedPost}/>
                        )
                    })}
                </div>

            </div>
          )
    }
}

export default Blog
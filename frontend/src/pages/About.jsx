import React from 'react';

import './About.css';
import LinkBow from '../assets/link-bow.png';
import { aboutIntroText, aboutMainText } from '../constants';

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-inner-container'>
            <h1 className='about-header' data-aos="fade-down">About</h1>
            <hr/>
            <div className='about-intro-box'>
                <p className='about-intro-text' data-aos="fade-right">{aboutIntroText}</p>
                <img src={LinkBow} alt='Link with a bow and arrow' className='link-about-image' data-aos="fade-left"/>
            </div>
            <div data-aos="fade-up" className='about-content' dangerouslySetInnerHTML={{ __html: aboutMainText}}></div>
        </div>
    </div>
  )
}

export default About
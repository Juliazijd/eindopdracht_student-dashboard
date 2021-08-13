import React from 'react';
import AboutImage from '../assets/about.jpg';

function About() {
    return (
        <div className='about'>
            <h1>What is this about?</h1>
            <p>Me finally finishing the last assignment of the front-end education! 💁</p>
            <img src={AboutImage} alt="problem?"></img>
        </div>
    )
}

export default About;
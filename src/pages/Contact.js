import React from 'react';
import ContactImage from '../assets/contact.jpg';

function Contact() {
    return (
        <div className='contact'>
            <h1>Contact me</h1>
            <p>But only if you have good news please! 😜</p>
            <img src={ContactImage} alt="problem?"></img>
        </div>
    )
}

export default Contact;
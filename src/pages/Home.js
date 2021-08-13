import React from 'react';
import HomeImage from '../assets/home.jpg';

function Home() {
    return (
        <div className="home">
            <h1>Welcome to the Winc Academy <br /> Student Dashboard!</h1>
            <p>Feel free to look around 👀</p>
            <img src={HomeImage} alt="problem?"></img>
        </div>
    )
}

export default Home;
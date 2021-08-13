import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/results'>Results</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='whole-nav-container'>
            <div className='title-container'>
                <h3>Books Lover</h3>
            </div>
            <div className='nav-container'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/review'>Review</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/about'>About</Link>
            </nav>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'


const Header = () => {
    return (
        <div className='fs-3 p-4 header me-4 text-center bg-success'>
            <Link className='header-link fs-2 me-5' to={'/'} >Home</Link>
            <Link className='header-link fs-2 me-5' to={'/checkout'}>Checkout</Link>
            <Link className='header-link fs-2 me-5' to={'/blogs'}>Blogs</Link>
            <Link className='header-link fs-2 me-5' to={'/about'}>About Me</Link>
            <Link className='header-link fs-2 me-5' to={'/signin'}>Sign-in</Link>
        </div>
    );
};

export default Header;
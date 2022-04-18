import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='fs-3 me-3 text-center'>
            <Link className=' me-3' to={'/'} >Home</Link>
            <Link className=' me-3' to={'/checkout'}>Checkout</Link>
            <Link className=' me-3' to={'/blogs'}>Blogs</Link>
            <Link className=' me-3' to={'/about'}>About Me</Link>
        </div>
    );
};

export default Header;
import React from 'react';
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import '../Header/Header.css'


const Header = () => {
    const handleSignOut = () => {
        signOut(auth)
    }
    const [user] = useAuthState(auth);
    return (
        <div className='fs-3 p-4 header me-4 text-center bg-success'>
            <Link className='header-link fs-2 me-5' to={'/'} >Home</Link>
            <Link className='header-link fs-2 me-5' to={'/checkout'}>Checkout</Link>
            <Link className='header-link fs-2 me-5' to={'/blogs'}>Blogs</Link>
            <Link className='header-link fs-2 me-5' to={'/about'}>About Me</Link>
            {
                user ?
                    <button className='bg-primary rounded-pill fw-bolder me-5 fs-5 btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                    :
                    <Link className='fs-5 bg-primary rounded-pill fw-bolder px-2 py-1 header-link fs-5 me-5' to={'/signin'}>Sign-in</Link>}
        </div>
    );
};

export default Header;
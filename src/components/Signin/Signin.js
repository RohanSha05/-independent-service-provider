import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import '../Signin/Signin.css'

const Signin = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }


    const navigateRegister = event => {
        navigate('/register')
    }

    const handlePasswordReset = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit} className='w-25 mt-5 p-5 form-body'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign-in
                </Button>
                <div className='mt-2'>
                    <span>Forget Password?</span>
                    <Button onClick={handlePasswordReset} variant='link' className=' text-info'>Reset Password</Button>
                </div>
                <p className='mt-3'>Not Registered Yet? <Link
                    to='/register' className='text-info pe-auto' onClick={navigateRegister}>Please register</Link></p>
            </Form>

        </div>
    );
};

export default Signin;
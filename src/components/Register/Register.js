import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const navigateSignin = () => {
        navigate('/signin')
    }

    const handleRegister = event => {
        event.preventdefault();
    }

    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleRegister} className='w-25 mt-5 p-5 form-body'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p className='mt-3'>Already have an account? <Link
                    to='/signin' className='text-danger pe-auto text-decoration-none' onClick={navigateSignin}>Please sign-in</Link></p>
            </Form>
        </div>
    );
};

export default Register;
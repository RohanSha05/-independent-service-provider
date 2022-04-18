import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Checkout from './components/Checkout/Checkout';
import Header from "./components/Header/Header"
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Signin from './components/Signin/Signin';

function App() {
    return (
        <div className="">
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/checkout' element={
                    <RequireAuth>
                        <Checkout></Checkout>
                    </RequireAuth>
                }></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/signin' element={<Signin></Signin>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </div>
    );
}

export default App;
import React from 'react';
import { Card } from 'react-bootstrap';
import checkout from '../Checkout/checkout.jpg'

const Checkout = () => {
    return (
        <div>
            <h1 className='text-center'>Here is your checkout</h1>
            <div className='container  col-lg-3 col-sm-12'>
                <Card className='card-body'>
                    <Card.Body>
                        <Card.Img className='' variant="top" src={"https://i.ibb.co/mXPkvKs/package1.jpg"} style={{ width: 300 }} />
                        <Card.Title>Replacement of missing teeth</Card.Title>
                        <Card.Text>
                            "Ental implants are one of the most common methods of tooth replacement.Dental implants are a very reliable type of tooth replacement that both looks and feels like a real tooth.
                        </Card.Text>
                        <p className='fw-bolder'>Cost: $420</p>
                        <div className='d-flex justify-content-center'>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Checkout; import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import '../Service/Service.css'

const Service = (props) => {
    const { image, name, price, description } = props.services;
    return (
        <div className='container  col-lg-3 col-sm-12'>
            <Card className='card-body'>
                <Card.Body>
                    <Card.Img className='' variant="top" src={image} style={{ width: 300 }} />
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p className='fw-bolder'>Cost: ${price}</p>
                    <div className='d-flex justify-content-center'>
                        <Button> <Link className='appoint-link' to="/checkout" element={<Checkout></Checkout>}>Appoint Now</Link> </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;
import React from 'react';
import banner from '../Home/images/banner.png'
import '../Home/Home.css'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col mt-5 col-sm-6 bg-success title-body rounded mx-auto">
                        <h1 className=' w-full text-center pt-3 fw-bolder  title-header' style={{ fontSize: 70 }}>Jiffy Dental Center</h1>
                        <h3 className=' w-75 text-center pb-3 title-header  fw-bolder'>A Dental Care 24 Hrs</h3>
                        <p className=' title-header text-center w-75 fs-4 fw-bolder '>-Hello, I'am Dr.Jiffy. I have some skills.</p>
                        <div className=' ms-5'>
                            <h4 className=''>My Skills:</h4>
                            <ul>
                                <li>Work experience as a Dentist</li>
                                <li>In-depth understanding of dental hygiene</li>
                                <li>Experience with dental equipment and tools</li>
                                <li>Experience with surgeries and teeth extractions</li>
                                <li>Doctor of Dental Surgery (DDS), Doctor of Medicine in Dentistry (DMD) or similar degree that gives license to practice the dentist profession</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6  col-sm-12 ">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <Services></Services>
            </div>

        </div>
    );
};

export default Home; import React from 'react';
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
import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import '../Signin/Signin.css'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        toast('Sent email');
    }

    const provider = new GoogleAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
            })
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
                <Button onClick={handleGoogleSignIn}>Sign-in with google</Button>
            </Form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Signin; import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center mt-5'>Answers Of The Given Questions</h2>
            <Accordion defaultActiveKey="0" className='mt-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>1. Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        <span className='fw-bolder'>Authorization:</span>
                        <p>Authorization is the process to determine whether the authenticated user has access to the particular resources. It verifies your rights to grant you access to resources such as information, databases, files, etc. Authorization usually comes after authentication which confirms your privileges to perform. In simple terms, it’s like giving someone official permission to do something or anything.</p>
                        <span className='fw-bolder'>Authentication:</span>
                        <p>Authentication is about validating your credentials like User Name/User ID and password to verify your identity. The system determines whether you are what you say you are using your credentials.In public and private networks, the system authenticates the user identity via login passwords. Authentication is usually done by a username and password.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>2. Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <p>Firebase Authentication makes it easier to get my users signed-in without having to understand the complexities behind implementing my own authentication system.Iam using firebase because
                            Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users.</p>
                        <p>There are some other options to implement authentication such as Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript and more.</p>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>3. What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        <p>Firebase supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter,Analytics.
                            Cloud Messaging,Authentication,Realtime Database,Storage,Hosting,Remote Configuration,
                            Test Lab. and more.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs; import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();
    const navigateSignin = () => {
        navigate('/signin')
    }

    if (user) {
        navigate('/checkout')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleRegister} className='w-25 mt-5 p-5 form-body'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Your name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign-up
                </Button>
                <p className='mt-3'>Already have an account? <Link
                    to='/signin' className='text-danger pe-auto text-decoration-none' onClick={navigateSignin}>Please sign-in</Link></p>
            </Form>
        </div>
    );
};

export default Register;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCWnHJC8Ye4MUEyWJFHwrrAGwu02f9C47c",
    authDomain: "my-dental-care-f2f24.firebaseapp.com",
    projectId: "my-dental-care-f2f24",
    storageBucket: "my-dental-care-f2f24.appspot.com",
    messagingSenderId: "430687601420",
    appId: "1:430687601420:web:d30c0ef74f407c2fb03f29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; import React from 'react';
import '../About/About.css'

const About = () => {
    return (
        <div className=''>
            <div className='d-flex'>
                <img className='w-25 p-5' src={"https://i.ibb.co/dcQTFYk/20220418-165040.jpg"} alt="" />
                <div className='p-5'>
                    <h1 className='my-name text-center'>Rafat Shariar Rohan</h1>
                    <div className='mx-auto w-50'>
                        <h4>Hello, Iam Rohan. Iam from Rajshahi. I studying BSc. in CSE at Daffodil International University. iam am a quick learner. I want to be a successful web developer. From childhood I want to be an software engineer. Today I have some opportunities to fulfill my dreams. I want to thank Programming Hero and Jhanker Mahboob for giving me a chance. </h4>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
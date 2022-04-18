import React from 'react';
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

export default Blogs;
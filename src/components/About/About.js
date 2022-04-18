import React from 'react';
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
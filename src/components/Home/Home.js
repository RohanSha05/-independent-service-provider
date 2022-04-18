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

export default Home;
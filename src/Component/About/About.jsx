import React from 'react';
import img1 from '../../assets/images/about_us/parts.jpg';
import img2 from '../../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <div className="hero flex min-h-screen bg-base-200 py-24">
        <div className="hero-content relative flex-col lg:flex-row">
            <div className='flex-1 relative h-[400px]'>
          <img src={img2} className="w-4/5 h-3/4 rounded-lg shadow-2xl" />
          <img src={img1} className="w-1/2 h-2/4 absolute left-1/2 bottom-0 rounded-lg shadow-2xl" />
          </div>
          <div className='flex-1 flex flex-col items-start justify-between h-[400px]'>
            <p className='text-[#FF3811] font-bold'>About Us</p>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            <button className="btn bg-[#FF3811] text-white">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;
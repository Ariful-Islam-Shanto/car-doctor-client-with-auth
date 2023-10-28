import React from 'react';

import img1 from '../../assets/images/banner/1.jpg';
import img2 from '../../assets/images/banner/2.jpg';
import img3 from '../../assets/images/banner/3.jpg';
import img4 from '../../assets/images/banner/4.jpg';
import img5 from '../../assets/images/banner/5.jpg';
import img6 from '../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full py-24">
        <div id="slide1" className="carousel-item h-[550px] rounded-xl relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute rounded-xl h-full bg-transparent bg-gradient-to-r from-[#151515] to-[#8f8d8d00] w-full gap-5 left-0 top-0">
            <div className='space-y-7  transform translate-x-1/4 translate-y-1/3 left-5 w-1/3'>
            <h1 className='text-6xl text-white font-bold'> Affordable Price For Car Servicing</h1>
            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn bg-[#FF3811] rounded-md border-none mr-5">Discover More</button>
            <button className="btn  border-2 border-white rounded-md">Latest Project</button>
            </div>
            </div>

          </div>
          <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item h-[550px] rounded-xl  relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute h-full rounded-xl bg-transparent bg-gradient-to-r from-[#151515] to-[#8f8d8d00] w-full gap-5 left-0 top-0">
            <div className='space-y-7  transform translate-x-1/4 translate-y-1/3 left-5 w-1/3'>
            <h1 className='text-6xl text-white font-bold'> Affordable Price For Car Servicing</h1>
            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn bg-[#FF3811] rounded-md border-none mr-5">Discover More</button>
            <button className="btn  border-2 border-white rounded-md">Latest Project</button>
            </div>
            </div>

          </div>
          <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item h-[550px] rounded-xl relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute h-full rounded-xl bg-transparent bg-gradient-to-r from-[#151515] to-[#8f8d8d00] w-full gap-5 left-0 top-0">
            <div className='space-y-7  transform translate-x-1/4 translate-y-1/3 left-5 w-1/3'>
            <h1 className='text-6xl text-white font-bold'> Affordable Price For Car Servicing</h1>
            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn bg-[#FF3811] rounded-md border-none mr-5">Discover More</button>
            <button className="btn  border-2 border-white rounded-md">Latest Project</button>
            </div>
            </div>

          </div>
          <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item h-[550px] rounded-xl relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute h-full rounded-xl bg-transparent bg-gradient-to-r from-[#151515] to-[#8f8d8d00] w-full gap-5 left-0 top-0">
            <div className='space-y-7  transform translate-x-1/4 translate-y-1/3 left-5 w-1/3'>
            <h1 className='text-6xl text-white font-bold'> Affordable Price For Car Servicing</h1>
            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn bg-[#FF3811] rounded-md border-none mr-5">Discover More</button>
            <button className="btn  border-2 border-white rounded-md">Latest Project</button>
            </div>
            </div>

          </div>
          <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item h-[550px] rounded-xl relative w-full">
          <img src={img5} className="w-full" />
          <div className="absolute h-full rounded-xl bg-transparent bg-gradient-to-r from-[#151515] to-[#8f8d8d00] w-full gap-5 left-0 top-0">
            <div className='space-y-7  transform translate-x-1/4 translate-y-1/3 left-5 w-1/3'>
            <h1 className='text-6xl text-white font-bold'> Affordable Price For Car Servicing</h1>
            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn bg-[#FF3811] rounded-md border-none mr-5">Discover More</button>
            <button className="btn  border-2 border-white rounded-md">Latest Project</button>
            </div>
            </div>

          </div>
          <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item h-[550px] rounded-xl relative w-full">
          <img src={img6} className="w-full" />
          <div className="absolute rounded-xl h-full bg-transparent bg-gradient-to-r from-[#151515] to-[#8f8d8d00] w-full gap-5 left-0 top-0">
            <div className='space-y-7  transform translate-x-1/4 translate-y-1/3 left-5 w-1/3'>
            <h1 className='text-6xl text-white font-bold'> Affordable Price For Car Servicing</h1>
            <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div>
            <button className="btn bg-[#FF3811] rounded-md border-none mr-5">Discover More</button>
            <button className="btn  border-2 border-white rounded-md">Latest Project</button>
            </div>
            </div>

          </div>
          <div className="absolute flex gap-5 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa6';
import { Link, Navigate, useLoaderData } from 'react-router-dom';

const Details = () => {

    const loaderData = useLoaderData();
    const [data, setData ] = useState(loaderData || []);
    const [details, setDetails] = useState(data[0]);
    console.log(data);

    const {img, description, facility, price, service_id, title, _id} = details || {};

    const handleService = (id) => {
     
        fetch(`http://localhost:5000/service/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setDetails(data);
        })

    }

    return (
        <div className='w-full h-full'>
            <div className='h-[300px] w-full relative rounded-xl'>
                <img src={img} alt="" srcset="" className='h-full rounded-xl w-full'/>
                <div className='border-b-[#FF3811] absolute left-[40%] bottom-0 h-0  border-b-[50px] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent text-center text-white font-medium'>
                    Home/Service Details
                </div>
            </div>
            
                <div className='flex h-full gap-6 w-full py-24'>
                    <div className='flex-1 h-full  w-full space-y-8'>
                        <img src={img} alt=""  className='w-full rounded-xl h-[400px]' />
                        <h1 className='text-4xl text-gray-800 font-bold'>{title}</h1>
                        <p>{description}</p>

                        <div className='grid grid-cols-2 gap-4 '>
                            {
                                facility?.map((facil, index) => <div key={index} className='p-10 rounded-xl border-t-2 space-y-4 border-t-[#FF3811] bg-gray-200'>
                                    <h1 className='text-gray-600 text-xl font-medium'>{facil.name}</h1>
                                    <p>{facil.details}</p>
                                </div>)
                            }
                        </div>
                        <p>{description}</p>
                        <div className='grid grid-cols-3 gap-4 '>
                            <div className='space-y-4  flex items-center justify-center flex-col drop-shadow-md rounded-xl border p-10'>
                                <div className='bg-[#d29e93] rounded-full h-14 w-14 flex items-center justify-center'>
                                    <div className='bg-[#FF3811] rounded-full h-10 w-10 text-center flex items-center justify-center text-white font-medium'>
                                        <p>01</p>
                                    </div>
                                </div>
                                <h1 className='text-xl text-gray-800 font-medium'>STEP ONE</h1>
                                <p >It uses a dictionary of over 200 .</p>
                            </div>
                            <div className='space-y-4 flex items-center justify-center flex-col drop-shadow-md rounded-xl border p-10'>
                                <div className='bg-[#d29e93] rounded-full h-14 w-14 flex items-center justify-center'>
                                    <div className='bg-[#FF3811] rounded-full h-10 w-10 text-center flex items-center justify-center text-white font-medium'>
                                        <p>02</p>
                                    </div>
                                </div>
                                <h1 className='text-xl text-gray-800 font-medium'>STEP TWO</h1>
                                <p>It uses a dictionary of over 200 .</p>
                            </div>
                            <div className='space-y-4 flex items-center justify-center flex-col drop-shadow-md rounded-xl border p-10'>
                                <div className='bg-[#d29e93] rounded-full h-14 w-14 flex items-center justify-center'>
                                    <div className='bg-[#FF3811] rounded-full h-10 w-10 text-center flex items-center justify-center text-white font-medium'>
                                        <p>03</p>
                                    </div>
                                </div>
                                <h1 className='text-xl text-gray-800 font-medium'>STEP THREE</h1>
                                <p>It uses a dictionary of over 200 .</p>
                            </div>
                        </div>

                        <div className='relative rounded-xl'>
                        <img src={img} alt=""  className='w-full rounded-xl h-[400px]'/>
                        <div className='w-20 h-20 rounded-full border-4 border-[#FF3811] flex items-center justify-center absolute top-[40%] z-20 left-[40%]'>
                        <FaPlay className='text-3xl text-[#FF3811]'></FaPlay>
                        </div>
                        <div className='bg-gradient-to-tr z-10 absolute top-0 w-full h-full rounded-xl from-[#121111cb] to-[#bab3b300]'></div>
                        </div>
                    </div>
                    <div className='w-1/3 h-full rounded-xl space-y-6' >
                        <div className='w-full rounded-xl h-full p-10 bg-gray-100'>
                            <h1 className='text-gray-800 text-2xl font-bold'>Services</h1>
                            <div className='block'>
                                {
                                    loaderData?.map(detail =>
                                        <button id={detail._id} onClick={() => {
                                            handleService(detail._id)
                                        }} className='text-gray-800 text-2xl font-medium mt-4 bg-white rounded-xl w-full px-5 py-2' key={detail._id}>
                                            {detail.title}
                                        </button>  
                                        
                                        )
                                }
                            </div>
                                
                        </div>
                        <p className='text-2xl text-gray-800 font-bold my-6'>Price : {price}</p>
                                <Link to={`/checkout/${_id}`} ><button className='px-5 py-2 bg-[#ff3811] rounded-md w-full text-white'>Proceed Checkout</button></Link>
                    </div>
                </div>

            
       </div>
    );
};

export default Details;
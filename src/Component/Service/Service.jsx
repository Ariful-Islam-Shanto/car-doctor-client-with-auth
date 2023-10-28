import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";


const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    // const title = ['Electrical System', 'Engine Diagnostics', 'Auto Car Repair', 'Electrical System', 'Engine Diagnostics', 'Auto Car Repair']
    // const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="space-y-6 py-24">
      <p className="text-[#FF3811] font-medium text-center">Service</p>
      <h1 className="text-4xl text-black text-center">Our Service Area</h1>
      <p className="text-center mb-8">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-3 gap-4 ">
        {
            services.map(service =>  <div key={service._id} className="card  bg-white drop-shadow-sm p-4 space-y-3">
            <figure className="">
              <img
                src={service.img}
                alt="Shoes"
                className="rounded-xl w-full h-[200px]"
              />
            </figure>
            <div className="flex items-center justify-between text-center space-y-2">
              <div>
              <h2 className=" text-black text-left text-xl font-bold">{service.title}</h2>
              <p className="text-[#FF3811] text-left font-medium">{service.price}</p>
              </div>
              <div>
                <Link to={`/details/${service._id}`} > <FaArrowRight></FaArrowRight> </Link>
              </div>
            </div>
          </div>)
        }
      </div>

      <div className="w-full flex items-center justify-center">
        <button className="text-[#FF3811]  border-2 border-[#FF3811] rounded-md px-5 py-2">More Services</button>
      </div>
    </div>
  );
};

export default Service;

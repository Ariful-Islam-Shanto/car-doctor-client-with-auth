import React from 'react';
import img1 from '../../assets/images/products/1.png';
import img2 from '../../assets/images/products/2.png';
import img3 from '../../assets/images/products/3.png';
import img4 from '../../assets/images/products/4.png';
import img5 from '../../assets/images/products/5.png';
import img6 from '../../assets/images/products/6.png';

const Products = () => {
    const products = [img1, img2, img3, img4, img5, img6];
    const title = ['Car Engine Plug', 'Car Air Filter', 'Cools Led Light', 'Cools Led Light', 'Cools Led Light', 'Cools Led Light'];

    return (
        <div className="space-y-6 py-24">
        <p className="text-[#FF3811] font-medium text-center">Popular Products</p>
        <h1 className="text-4xl text-black text-center">Browse Our Products</h1>
        <p className="text-center mb-8">
        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div className="grid grid-cols-3 gap-4 ">
          {
              products.map((product, index) =>  <div key={index} className="card   bg-white drop-shadow-sm p-4 space-y-3">
              <figure className="">
                <img
                  src={product}
                  alt="Shoes"
                  className="rounded-xl w-full h-[200px]"
                />
              </figure>
              <div className=" items-center text-center space-y-2">
                <h2 className=" text-black text-left text-xl font-bold">{title[index + 1]}</h2>
                <p className="text-[#FF3811] text-left font-medium">$20.00</p>
              </div>
            </div>)
          }
        </div>
  
        <div className="w-full flex items-center justify-center">
          <button className="text-[#FF3811]  border-2 border-[#FF3811] rounded-md px-5 py-2">More Products</button>
        </div>
      </div>
    );
};

export default Products;
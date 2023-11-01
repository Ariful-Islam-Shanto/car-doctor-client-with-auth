import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";

const Checkout = () => {
  const {user} = useContext(AuthContext);
  const loaderData = useLoaderData();

  const handleOrder = e => {
    e.preventDefault();

    const form = new FormData(e.target);
    const firstName = form.get('firstName');
    const lastName = form.get('lastName');
    const yourPhone = form.get('yourPhone');
    const email = form.get('email');
    const message = form.get('message');
    const date = new Date();
    const month = date.getMonth();
    const today = date.getDate();
    const year = date.getFullYear();
    const fullDate = today + '/' + month + "/" + year;

    const order = {
        customerName : firstName + lastName,
        email : email,
        date : fullDate,
        title: loaderData.title,
        img: loaderData.img,
        service_id : loaderData._id,
        phone: yourPhone,
        price : loaderData.price
    }

    console.log(order);

    fetch('https://car-doctor-server-eight-sage.vercel.app/checkout', {
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId) {
            alert('Order Confirmed!')
        }
    })
  }

  return (
    <div className="">
      <div className="h-[300px] w-full relative rounded-xl">
        <img
          src={loaderData.img}
          alt=""
          srcset=""
          className="h-full rounded-xl w-full"
        />
        <p className="text-white text-6xl font-bold absolute top-[30%] left-[10%]">Checkout</p>
        <div className="border-b-[#FF3811] absolute left-[40%] bottom-0 h-0  border-b-[50px] border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent text-center text-white font-medium">
          Home/Service Details
        </div>
      </div>
      <div className="py-24">
        <div className="card bg-gray-100 w-full p-12 shadow-2xl ">
            <h1 className="text-4xl text-black font-bold text-center">{loaderData.title}</h1>
          <form onSubmit={handleOrder} className="card-body grid">
            <div className="form-control col-span-1 row-span-1">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First name"
                name="firstName"
                className="input input-bordered"
                defaultValue={user?.displayName}
                required
              />
            </div>
            <div className="form-control col-span-1 row-span-1">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control col-span-1 row-span-1">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                type="text"
                placeholder="Your phone"
                name="yourPhone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control col-span-1 row-span-1">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                placeholder="Your email"
                name="email"
                className="input input-bordered"
                defaultValue={user?.email}
                required
              />
            </div>
            <div className="form-control col-span-2 row-span-4">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="border p-10 rounded-xl"
                placeholder="Message "
              ></textarea>
            </div>
            <div className=" mt-6 w-full col-span-2">
              <button type="submit" className="px-5 py-2 rounded-md text-white bg-[#ff3811] w-full">
              Order Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

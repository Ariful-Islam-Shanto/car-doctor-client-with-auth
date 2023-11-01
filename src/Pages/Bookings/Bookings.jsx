import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Auth Provider/AuthProvider';
import { FaCross, FaDeleteLeft } from 'react-icons/fa6';
import swal from 'sweetalert';
import axios from 'axios';
import useAxiosSecure from '../../Custom Hook/useAxiosSecure';

const Bookings = () => {
    const {user, setLoading} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    // const url = `https://car-doctor-server-eight-sage.vercel.app/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
        // axios.get(url, {withCredentials : true}) 
        // .then(data => {
        //     setBookings(data.data)
            
        // })

        axiosSecure.get(url)
        .then(res => {
            setBookings(res.data);
        })
        
    },[url, axiosSecure]);

    // console.log(bookings);

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`https://car-doctor-server-eight-sage.vercel.app/delete/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if(data.deletedCount > 0) {
                      
                        swal("Poof! Your order has been deleted!", {
                          icon: "success",
                        });
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                        
                    }
                })
            } else {
              swal("Your order is safe!");
            }
          });
    }

    const handleConfirm = (id) => {
        fetch(`https://car-doctor-server-eight-sage.vercel.app/confirm/${id}`, {
            method: "PATCH",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status : 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                swal('Order is confirmed.')
                console.log(data);

                //? Setting the status to the clicked id.
                const remaining = bookings.filter(booking => booking._id !== id);
                const updatedId = bookings.find(booking => booking._id === id);
                updatedId.status = 'confirm';

                const newBookings = [updatedId, ...remaining];
                setBookings(newBookings);
            }
        })
    }

    return (
        <div className='py-24 flex gap-6 flex-col '>
            {
                bookings?.map(booking => <div className='flex items-center justify-between' key={booking._id}>
                    <FaDeleteLeft onClick={() => {
                        handleDelete(booking._id);
                    }} className='text-4xl'></FaDeleteLeft>
                     <img src={booking.img} alt="" className='h-[150px] w-[150px] rounded-md'/>
                     <h1 className="text-2xl text-black font-bold">{booking.title}</h1>
                     <p className='text-[#ff3811] font-medium'>{booking.price}</p>
                     <p className=' font-medium'>{booking.date}</p>

                     {
                        booking.status === 'confirm' ? 
                        <span className='font-bold text-primary'>Confirmed</span> :
                        <button onClick={() => {
                           handleConfirm(booking._id)
                        }} className='btn bg-[#ff3811] text-white'>Pending</button>
                     }
                </div>)
            }
        </div>
    );
};

export default Bookings;
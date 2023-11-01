import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";


//? Creating a baseUrl for out main path so that we don't have to repeat it
//? every time. We can user axiosSecure instead of 'http://localhost:5000', https://car-doctor-server-eight-sage.vercel.app
const axiosSecure = axios.create({
    baseURL : 'https://car-doctor-server-eight-sage.vercel.app',
    withCredentials : true
})

const useAxiosSecure = () => {
     const {logOut} = useAuth();
     const navigate = useNavigate();

    //? Interceptor is a way to intercept before making a call and also 
    //? before giving the final res. Here we are trying to logout the user
    //? if the token is expired or not found. 
    
    //* We are getting the res and 
    //* checking if there is an error with the status code of (401 & 403)
    //* if one of this is true just logging out the user.
  
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            //* If there is no error then return the res.
            return res;
        }, error => {
            //* If error just log out the user.
            if(error.response.status === 401 || error.response.status === 403) {
                logOut()
                .then(res => {
                    alert('session expired please log in.');
                    navigate('/login');
                })
                .catch(err => {
                    console.log(err);
                });
            }
        })
    },[logOut, navigate])

    return axiosSecure;

};

export default useAxiosSecure;
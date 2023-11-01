import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Auth Provider/AuthProvider";
import axios from "axios";
import useAuth from "../../Custom Hook/useAuth";

const Login = () => {

  // const {signIn} = useContext(AuthContext);
  //? custom hook
  const {signIn} = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signIn(email, password) 
    .then(data => {

      if(data) {
        alert('Successfully logged in.')

        //? This cod below is from module 60
        // const user = {email}
        // axios.post(`https://car-doctor-server-eight-sage.vercel.app/jwt`, user, {withCredentials:true})
        // .then(data => {
        //   console.log(data);
        // })

      }
    })
    .catch(err => {
      alert(err.message);
    })

  };

  return (
    <div className="hero min-h-screen  py-12">
      <div className="hero-content flex-col gap-6 lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card py-6 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl text-black font-medium text-center">
            Log In
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#FF3811] text-white">
                Sign In
              </button>
            </div>
            <p className="text-center font-medium text-gray-600">
              or Sign in with
            </p>
          </form>
          <div className="text-center">
            <p className="text-gray-500 font-medium"> New to Car Doctor?</p>
            <Link to={'/signUp'} className="text-blue-400 hover:text-blue-700 font-bold underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

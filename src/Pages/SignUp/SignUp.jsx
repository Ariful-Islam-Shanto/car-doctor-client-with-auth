import React, { useContext } from "react";
import img from '../../assets/images/login/login.svg';
import {Link} from 'react-router-dom';
import { AuthContext } from "../../Auth Provider/AuthProvider";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        createUser(email, password)
        .then(data => {
            alert("Successfully created account.")
        })
        .catch(err => {
            alert(err.message);
        })
    }

  return (
    <div className="hero min-h-screen  py-12">
      <div className="hero-content flex-col gap-6 lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card py-6 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-4xl text-black font-medium text-center">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
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
              <button type="submit" className="btn bg-[#FF3811] text-white">Sign up</button>
            </div>
            <p className="text-center font-medium text-gray-600">or Sign in with</p>
          </form>
          <div className="text-center">
            <p className="text-gray-500 font-medium">Already have an account?</p>
            <Link to={'/login'} className="text-blue-400 font-bold hover:underline">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

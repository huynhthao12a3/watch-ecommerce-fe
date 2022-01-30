import React from 'react';
import { Link } from 'react-router-dom';
import RegisterImg from '../assets/img/Login-watch.jpg';

const RegisterPage = () => {
  return (
    <div className="bg-tertiary-50 min-h-screen">
      <section className="relative flex flex-wrap lg:h-screen lg:items-center section-center  ">
        <div className="w-full px-4  lg:w-1/2 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-24 ">
          <div className="max-w-lg mx-auto text-center mt-10">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Create an account.
            </h1>
          </div>

          <form action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            {/* Username */}
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  placeholder="Enter username"
                />
              </div>
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  placeholder="Enter email"
                />
              </div>
            </div>
            {/* Password */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  placeholder="Enter password"
                />
              </div>
            </div>
            {/* Confirm password */}
            <div>
              <label htmlFor="password" className="sr-only">
                Confirm password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between ml-3">
              <p className="text-sm text-gray-500">
                Already registered?{' '}
                <Link to="/login" className="underline">
                  Login
                </Link>
              </p>

              <button
                type="submit"
                className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-secondary-600 hover:bg-secondary-800 rounded-lg "
              >
                Register
              </button>
            </div>
          </form>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 object-cover w-full h-full "
            src={RegisterImg}
            alt="Login watch"
          />
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;

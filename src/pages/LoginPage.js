import React, { useState, useEffect } from 'react';
import LoginImg from '../assets/img/auth.jpg';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/user_context';
import Loading from '../components/Loading';
import Error from '../components/Error';

const LoginPage = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, loginUser, error, loading } = useUserContext();

  useEffect(() => {
    if (loginUser) {
      history.push('/');
    }
  }, [history, loginUser]);

  const submitHandler = e => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="bg-amber-50 min-h-screen">
      <section className="flex flex-wrap lg:h-screen lg:items-center w-full ">
        <div className="w-full px-4  lg:w-1/2 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-24 ">
          <div className="max-w-lg mx-auto text-center mt-10">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Log in to your account.
            </h1>
          </div>

          {error && (
            <div className='bg-red-200 rounded-lg my-2'>
              <Error title={error} />
            </div>
          )}

          {loading && <Loading />}

          <form
            action=""
            className="max-w-xl mx-auto mt-8 mb-0 space-y-4"
            onSubmit={submitHandler}
          >
            {/* Email */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  placeholder="Enter password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between ml-3">
              <p className="text-sm text-gray-500">
                New Customer?{' '}
                <Link to="/register" className="underline">
                  Register
                </Link>
              </p>

              <button
                type="submit"
                className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-secondary-600 hover:bg-secondary-800 rounded-lg "
              >
                Log in
              </button>
            </div>
          </form>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 object-cover w-full h-full "
            src={LoginImg}
            alt="Login watch"
          />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;

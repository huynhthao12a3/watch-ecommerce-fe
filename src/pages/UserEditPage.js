import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { useUserContext } from '../context/user_context';

const UserEditPage = ({ match, history }) => {
  const userId = match.params.id;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const {
    userDetails,
    userDetailsLoading,
    userDetailsError,
    getUserDetails,

    updateUserLoading,
    updateUserError,
    updateUserSuccess,
    updateUserReset,

    updateUser,
  } = useUserContext();

  useEffect(() => {
    if (updateUserSuccess) {
      updateUserReset();
      history.push('/admin/userlist');
    } else {
      if (!userDetails.name || userDetails._id !== userId) {
        getUserDetails(userId);
      } else {
        setName(userDetails.name);
        setEmail(userDetails.email);
        setIsAdmin(userDetails.role === 'admin');
      }
    }
  }, [history, userId, userDetails, updateUserSuccess]);

  const submitHandler = e => {
    e.preventDefault();
    updateUser({ _id: userId, name, email, isAdmin });
  };

  return (
    <>
      <section className="bg-amber-100 min-h-screen flex items-center">
        <div className="flex-col items-center justify-center  w-full">
          {userDetailsLoading ? (
            <Loading />
          ) : userDetailsError ? (
            <Error title={userDetailsError} />
          ) : (
            <>
              {updateUserLoading && <Loading />}
              {updateUserError && (
                <div className="w-full px-5 sm:w-1/2 xl:w-1/3  mx-auto bg-red-100 rounded-lg">
                  <Error title={updateUserError} />
                </div>
              )}
              <div className="w-full px-5 sm:w-1/2 xl:w-1/3  mx-auto my-4">
                <Link to="/admin/userlist">
                  <button className="relative inline-block px-3 py-1 font-medium group justify-self-start">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">
                      Go back
                    </span>
                  </button>
                </Link>
                <h1 className="text-center text-xl font-semibold ">
                  Edit User
                </h1>
              </div>
              <form
                onSubmit={submitHandler}
                className="w-full px-5 sm:w-1/2 xl:w-1/3  mx-auto pb-5 "
              >
                {/* Name */}
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter username"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-1 "
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                {/* IsAdmin */}
                <div className="mb-2 flex-col ">
                  <label
                    htmlFor="isAdmin"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    IsAdmin
                  </label>
                  <input
                    type="checkbox"
                    id="isAdmin"
                    checked={isAdmin}
                    onChange={e => setIsAdmin(e.target.checked)}
                  />
                </div>

                {/* Update btn */}
                <button
                  type="submit"
                  className="relative inline-block px-3 py-1 font-medium group mt-2"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                  <span className="relative text-black group-hover:text-white">
                    Update
                  </span>
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default UserEditPage;

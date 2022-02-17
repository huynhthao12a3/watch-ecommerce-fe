import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../context/user_context';
import { useOrderContext } from '../context/order_context';
import Loading from '../components/Loading';
import Error from '../components/Error';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const ProfilePage = () => {
  const history = useHistory();
  const userRef = useRef();
  const emailRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  const [pageNum, setPageNum] = useState(0);
  const [ordersPerPage, setOrdersPerPage] = useState([]);

  const {
    userDetails,
    userDetailsLoading,
    userDetailsError,
    getUserDetails,

    updateUserProfile,
    loginUser,
    userUpdateSuccess,

    userUpdateLoading,
    userUpdateError,
    userUpdateProfileReset,
  } = useUserContext();
  const {
    listMyOrders,
    myOrderListLoading,
    myOrderListError,
    myOrderListPagination: paginatedOrders,
  } = useOrderContext();

  useEffect(() => {
    setOrdersPerPage(paginatedOrders[pageNum]);
  }, [history, paginatedOrders, pageNum]);

  useEffect(() => {
    if (!loginUser) {
      history.push('/login');
    } else {
      if (!userDetails || !userDetails.name || userUpdateSuccess) {
        userUpdateProfileReset();
        getUserDetails('profile');
        listMyOrders();
      } else {
        setUser(userDetails.name);
        setEmail(userDetails.email);
      }
    }
  }, [history, loginUser, userDetails, userUpdateSuccess]);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, email, pwd, matchPwd]);

  const submitHandler = e => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
      setErrMsg('Invalid Entry');
      return;
    } else {
      updateUserProfile({ id: userDetails.userId, user, email, password: pwd });
      setErrMsg('');
      setUser('');
      setEmail('');
      setPwd('');
      setMatchPwd('');
    }
  };

  const prevPage = () => {
    setPageNum(oldPage => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = paginatedOrders.length - 1;
      }

      return prevPage;
    });
  };

  const nextPage = () => {
    setPageNum(oldPage => {
      let nextPage = oldPage + 1;
      if (nextPage > paginatedOrders.length - 1) {
        nextPage = 0;
      }

      return nextPage;
    });
  };

  const handlePage = index => {
    setPageNum(index);
  };

  return (
    <div className=" min-h-screen bg-tertiary-50 ">
      <div className="section-center py-10  lg:flex no-wrap ">
        {/* My profile */}
        <div className="w-full lg:w-3/12 md:mx-2 p-3 sm:p-2 bg-tertiary-100 self-start">
          <h2 className="text-2xl font-semibold text-center mb-3">
            My Profile
          </h2>
          {userUpdateSuccess && (
            <p className="bg-green-200 my-4 capitalize">
              Update profile successfully!
            </p>
          )}
          {errMsg && (
            <div className="bg-red-200 rounded-lg">
              <Error title={errMsg} />
            </div>
          )}
          {userDetailsLoading && <Loading />}
          {userUpdateLoading && <Loading />}

          {userDetailsError && (
            <div className="bg-red-200 rounded-lg">
              <Error title={userDetailsError} />
            </div>
          )}
          {userUpdateError && (
            <div className="bg-red-200 rounded-lg">
              <Error title={userUpdateError} />
            </div>
          )}

          <form>
            {/* Username */}
            <div>
              {' '}
              <label
                htmlFor="name"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Username
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${validName ? 'valid' : 'hide'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    validName || !user ? 'hide' : 'invalid'
                  } h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  ref={userRef}
                  autoComplete="off"
                  onChange={e => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? 'false' : 'true'}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  placeholder="Username"
                  className="block w-full p-3 mt-2 text-gray-700 bg-tertiary-50 appearance-none focus:outline-none focus:bg-tertiary-200 focus:shadow-inner mb-4"
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && user && !validName
                      ? 'instructions'
                      : 'offscreen'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>
            </div>

            {/* Email*/}
            <div>
              <label
                htmlFor="email"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                E-mail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${validEmail ? 'valid' : 'hide'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    validEmail || !email ? 'hide' : 'invalid'
                  } h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
              <div className="relative ">
                {' '}
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  autoComplete="off"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  required
                  aria-invalid={validEmail ? 'false' : 'true'}
                  aria-describedby="uidnote"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  className="block w-full p-3 mt-2 text-gray-700 bg-tertiary-50  appearance-none focus:outline-none focus:bg-tertiary-200 focus:shadow-inner mb-4"
                  placeholder="joe@gmail.com"
                  name="email"
                />
                <p
                  id="uidnote"
                  className={
                    emailFocus && email && !validEmail
                      ? 'instructions'
                      : 'offscreen'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  4 to 24 characters.
                  <br />
                  Must begin with a letter.
                  <br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>
            </div>

            {/* Password */}
            <div>
              {' '}
              <label
                htmlFor="password"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Password
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${validPwd ? 'valid' : 'hide'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${validPwd || !pwd ? 'hide' : 'invalid'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
              <div>
                <input
                  type="password"
                  id="password"
                  onChange={e => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? 'false' : 'true'}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  placeholder="Enter new password"
                  className="block w-full p-3 mt-2 text-gray-700 bg-tertiary-50  appearance-none focus:outline-none focus:bg-tertiary-200 focus:shadow-inner mb-4"
                />

                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? 'instructions' : 'offscreen'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a
                  special character.
                  <br />
                  Allowed special characters:{' '}
                  <span aria-label="exclamation mark">!</span>{' '}
                  <span aria-label="at symbol">@</span>{' '}
                  <span aria-label="hashtag">#</span>{' '}
                  <span aria-label="dollar sign">$</span>{' '}
                  <span aria-label="percent">%</span>
                </p>
              </div>
            </div>

            {/* Confirm password */}
            <div>
              {' '}
              <label
                htmlFor="password-confirm"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Confirm password
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    validMatch && matchPwd ? 'valid' : 'hide'
                  } h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    validMatch || !matchPwd ? 'hide' : 'invalid'
                  } h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
              <div>
                {' '}
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={e => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? 'false' : 'true'}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  placeholder="Confirm new password"
                  className="block w-full p-3 mt-2 text-gray-700 bg-tertiary-50  appearance-none focus:outline-none focus:bg-tertiary-200 focus:shadow-inner"
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? 'instructions' : 'offscreen'
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Must match the first password input field.
                </p>
              </div>
            </div>

            <button
              onClick={submitHandler}
              disabled={
                !validName || !validEmail || !validPwd || !validMatch
                  ? true
                  : false
              }
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-tertiary-500 shadow-lg focus:outline-none hover:bg-tertiary-900 hover:shadow-none"
            >
              Update
            </button>
          </form>
        </div>

        {/* My orders */}
        <div className="w-full lg:w-9/12 h-full  pt-10 md:pl-0 lg:pt-0 lg:pl-5 py-5 ">
          <section className="mx-auto bg-tertiary-100 ">
            <h2 className="text-2xl font-semibold text-center mb-3 ">
              My Orders
            </h2>
            {myOrderListLoading ? (
              <Loading />
            ) : myOrderListError ? (
              <div className="bg-red-200 rounded-lg">
                <Error title={myOrderListError} />
              </div>
            ) : (
              <>
                {/* Order list */}
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                  <div className="w-full ">
                    <table className="w-full">
                      <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-200 uppercase border-b border-gray-00">
                          <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                            ID
                          </th>
                          <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                            Date
                          </th>
                          <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                            Total
                          </th>
                          <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                            Paid
                          </th>
                          <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                            Delivered
                          </th>
                          <th className="px-0 py-3 text-xs md:text-sm lg:text-base text-center">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {ordersPerPage?.map((order, index) => {
                          const {
                            _id: id,
                            createdAt,
                            isDelivered,
                            total,
                            status,
                            paidAt,
                          } = order;
                          return (
                            <tr
                              className="text-gray-700 text-xs md:text-sm lg:text-base"
                              key={index}
                            >
                              {/* ID */}
                              <td className="py-3 border">
                                <p className="text-center">
                                  {id.substring(0, 10)}
                                </p>
                              </td>

                              {/* DATE */}
                              <td className="py-3 border">
                                <p className="text-center">
                                  {createdAt.substring(0, 10)}
                                </p>
                              </td>

                              {/* TOTAL */}
                              <td className="py-3 border">
                                <p className="text-center">${total}</p>
                              </td>

                              {/* PAID */}
                              <td className="py-3 border px-0">
                                {status === 'paid' ? (
                                  <p className="text-center">
                                    {paidAt.substring(0, 10)}
                                  </p>
                                ) : (
                                  <p className="text-center flex items-center justify-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="w-4 h-4 text-red-500"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </p>
                                )}
                              </td>
                              <td className="py-3 border px-0">
                                {isDelivered ? (
                                  <p className="text-center">
                                    {paidAt.substring(0, 10)}
                                  </p>
                                ) : (
                                  <p className="flex justify-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4 text-red-500"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                  </p>
                                )}
                              </td>
                              <td className="py-3 border px-2">
                                <Link to={`/order/${id}`}>
                                  <p className="flex justify-center px-0 py-1 bg-tertiary-500 hover:bg-tertiary-900 rounded text-white">
                                    Details
                                  </p>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Pagination */}
                {paginatedOrders?.length > 1 && (
                  <div className="flex justify-end">
                    {/* Prev btn */}
                    <button
                      onClick={prevPage}
                      className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md hover:bg-tertiary-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
                      </svg>
                    </button>
                    {/* Pagination btns */}
                    {[...Array(paginatedOrders.length).keys()].map(x => (
                      <button
                        key={x + 1}
                        onClick={() => handlePage(x)}
                        aria-current="page"
                        className={`${
                          x + 1 === pageNum + 1
                            ? 'bg-tertiary-500 text-tertiary-50'
                            : 'bg-tertiary-50 text-tertiary-500'
                        } z-10  border-tertiary-800  relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                      >
                        {x + 1}
                      </button>
                    ))}
                    {/* Next btn */}
                    <button
                      onClick={nextPage}
                      className="flex items-center justify-center px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md hover:bg-tertiary-50 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

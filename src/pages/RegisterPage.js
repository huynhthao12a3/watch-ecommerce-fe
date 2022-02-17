import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import RegisterImg from '../assets/img/auth.jpg';
import { useUserContext } from '../context/user_context';
import Loading from '../components/Loading';
import Error from '../components/Error';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const RegisterPage = ({ location, history }) => {
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

  const {
    loginUser,
    registerUser: register,
    registerUserLoading: loading,
    registerUserError: error,
  } = useUserContext();

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (loginUser) {
      history.push(redirect);
    }
  }, [history, loginUser, redirect]);

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

  const handleSubmit = async e => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd);
    if (!v1 || !v2 || !v3) {
      setErrMsg('Invalid Entry');
      return;
    }
    try {
      register(user, email, pwd);
      setUser('');
      setEmail('');
      setPwd('');
      setMatchPwd('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }
    }
  };

  return (
    <div className="bg-tertiary-50 min-h-screen">
      <section className="flex flex-wrap lg:h-screen lg:items-center w-full  ">
        <div className="w-full px-4  lg:w-1/2 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-24 ">
          <div className="max-w-lg mx-auto text-center mt-10">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Create an account.
            </h1>
          </div>

          {loading && <Loading />}
          {errMsg && (
            <div className="bg-red-200 rounded-lg">
              <Error title={errMsg} />
            </div>
          )}
          {error && (
            <div className="bg-red-200 rounded-lg">
              <Error title={error} />
            </div>
          )}

          <form action="" className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            {/* Username */}
            <div>
              <label htmlFor="username" className="font-light">
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

              <div className="relative mt-1">
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={e => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? 'false' : 'true'}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  placeholder="Enter username"
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
            {/* Email */}
            <div>
              <label htmlFor="email" className="font-light">
                Email
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

              <div className="relative mt-1">
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
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  placeholder="Enter email"
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
              <label htmlFor="password" className="font-light">
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
              <div className="relative mt-1">
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
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  placeholder="Enter password"
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
              <label htmlFor="password" className="font-light">
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
              <div className="relative mt-1">
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
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm "
                  placeholder="Confirm password"
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

            <div className="flex items-center justify-between ml-3">
              <p className="text-sm text-gray-500">
                Already registered?{' '}
                <Link to="/login" className="underline">
                  Login
                </Link>
              </p>

              <button
                onClick={handleSubmit}
                disabled={
                  !validName || !validEmail || !validPwd || !validMatch
                    ? true
                    : false
                }
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

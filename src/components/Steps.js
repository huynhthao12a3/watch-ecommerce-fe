import React from 'react';
import { Link } from 'react-router-dom';

const Steps = ({ step1, step2, step3, step4 }) => {
  return (
    <nav
      className="flex py-3 px-5 text-gray-700 bg-amber-100 rounded-lg border border-gray-200  justify-center"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-0 md:space-x-3 ">
        {/* Step 1 - Login*/}
        <li>
          <div className="flex items-center ">
            {step1 ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                <Link to="/login">
                  {' '}
                  <span className="ml-0 text-sm font-medium text-gray-700 md:ml-2">
                    Login
                  </span>
                </Link>
              </>
            ) : (
              <>
                <svg
                  className="mr-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                <button disabled>
                  {' '}
                  <span className="ml-0 text-sm font-medium text-gray-400 md:ml-2">
                    Login
                  </span>
                </button>
              </>
            )}
          </div>
        </li>

        {/* Step 2 - Shipping*/}
        <li>
          <div className="flex items-center ">
            {step2 ? (
              <>
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                </svg>
                <Link to="/shipping">
                  {' '}
                  <span className="ml-0 text-sm font-medium text-gray-700 md:ml-2">
                    Shipping
                  </span>
                </Link>
              </>
            ) : (
              <>
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                </svg>
                <button disabled>
                  {' '}
                  <span className="ml-0 text-sm font-medium text-gray-400 md:ml-2">
                    Shipping
                  </span>
                </button>
              </>
            )}
          </div>
        </li>

        {/* Step 3 - Payment*/}
        <li>
          <div className="flex items-center ">
            {step3 ? (
              <>
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                </svg>
                <Link to="/payment">
                  {' '}
                  <span className="ml-0 text-sm font-medium text-gray-700 md:ml-2">
                    Payment
                  </span>
                </Link>
              </>
            ) : (
              <>
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                </svg>
                <button disabled>
                  {' '}
                  <span className="ml-0 text-sm font-medium text-gray-400 md:ml-2">
                    Payment
                  </span>
                </button>
              </>
            )}
          </div>
        </li>

        {/* Step 4 - Place order*/}
        <li>
          <div className="flex items-center ">
            {step4 ? (
              <>
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                </svg>
                <Link to="/placeorder">
                  {' '}
                  <span className="ml-0 text-sm font-medium text-gray-700 md:ml-2">
                    Place order
                  </span>
                </Link>
              </>
            ) : (
              <>
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                </svg>
                <button disabled>
                  {' '}
                  <span className="ml-0 text-sm font-medium text-gray-400 md:ml-2">
                    Place order
                  </span>
                </button>
              </>
            )}
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Steps;

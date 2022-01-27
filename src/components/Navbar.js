import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsWatch, BsFillBagFill } from 'react-icons/bs';
import UserMenu from './UserMenu';
import AdminMenu from './AdminMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative grid items-center grid-cols-2 lg:grid-cols-3">
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="HomePage"
                title="HomePage"
                class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                aria-label="Our featured products"
                title="Our featured products"
                class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#new"
                aria-label="Our new product"
                title="Our new product"
                class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                New
              </a>
            </li>
            <li>
              <Link
                to="/products"
                aria-label="All products"
                title="All products"
                class="font-medium tracking-wide  transition-colors duration-200 hover:text-teal-accent-400"
              >
                Products
              </Link>
            </li>
          </ul>
          <a
            href="/"
            aria-label="HomePage"
            title="HomePage"
            class="inline-flex items-center lg:mx-auto"
          >
            <svg
              class="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Reverie
            </span>
          </a>
          <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
            {/* Show Log in & Register btns when user not log in*/}
            {/* <li>
              <Link
                to="/cart"
                aria-label="Cart"
                title="Cart"
                class="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                aria-label="Log in"
                title="Log in"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Log in
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                aria-label="Register"
                title="Register"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Register
              </Link>
            </li> */}

            {/* Show dropdown menu when user already log in*/}
            <li>
              <Link
                to="/cart"
                aria-label="Cart"
                title="Cart"
                class="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Link>
            </li>
            <li className="bg-black text-white">
              <AdminMenu />
              {/* <UserMenu /> */}
            </li>
          </ul>
          <div class="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full z-50">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Reverie
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Homepage"
                          title="Homepage"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#features"
                          aria-label="Our featured products"
                          title="Our featured products"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <Link
                          href="#new"
                          aria-label="Our new product"
                          title="Our new product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          New
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products"
                          aria-label="All products"
                          title="All products"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Products
                        </Link>
                      </li>
                      {/* Show Log in & Register btns when user not log in*/}
                      {/* <li>
                        <Link
                          to="/login"
                          aria-label="Log in"
                          title="Log in"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/register"
                          aria-label="Register"
                          title="Register"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Register
                        </Link>
                      </li> */}

                      {/* Show dropdown menu when user already log in*/}
                      <li className="bg-black text-white">
                        <AdminMenu />
                        {/* <UserMenu /> */}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

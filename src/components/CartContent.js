import React from 'react';
import Btn from './Btn';
import { cart } from '../data';
import { Link } from 'react-router-dom';

const CartContent = () => {
  console.log(cart);

  return (
    <>
      <section className="section-center text-center py-14">
        <h2 class="mb-10 text-4xl md:text-5xl font-bold font-heading">
          Your cart
        </h2>

        <div class="flex flex-wrap items-center -mx-4">
          {/* Your Cart */}
          <div class="w-full xl:w-8/12 mb-8 xl:mb-0 px-4">
            {/* Products columns*/}
            <div class="hidden lg:flex w-full">
              <div class="w-full lg:w-3/6 text-center">
                <h4 class="mb-6 font-bold font-heading text-gray-500">
                  Description
                </h4>
              </div>
              <div class="w-full lg:w-1/6">
                <h4 class="mb-6 font-bold font-heading text-gray-500">Price</h4>
              </div>
              <div class="w-full lg:w-1/6 text-center">
                <h4 class="mb-6 font-bold font-heading text-gray-500">
                  Quantity
                </h4>
              </div>
              <div class="w-full lg:w-1/6 text-right">
                <h4 class="mb-6 font-bold font-heading text-gray-500">
                  Subtotal
                </h4>
              </div>
            </div>

            {/* Products rows*/}
            <div class="mb-12  border-t  border-gray-200">
              {cart?.map(product => {
                const { amount, color, id, image, max, name, price } = product;
                return (
                  <div class="flex flex-wrap items-center -mx-4  border-b py-5">
                    {/* Img, info*/}
                    <div class="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0 ">
                      <div class="flex -mx-4 flex-wrap items-center">
                        <div class="w-full md:w-1/3 px-4 mb-3">
                          <div class="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                            <img
                              class="h-full object-contain"
                              src={image}
                              alt={name}
                            />
                          </div>
                        </div>
                        <div class="w-full md:w-2/3 px-4  text-left">
                          <h3 class="mb-2 text-xl font-bold font-heading">
                            {name}
                          </h3>
                          <p class="text-gray-500">{name}</p>
                          <button className="text-secondary-700 text-base w-4 h-4 md:w-5 md:h-5 mt-3 md:mt-4 ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Price*/}
                    <div class="hidden lg:block lg:w-2/12 px-4">
                      <p class="text-lg text-tertiary-500 font-bold font-heading">
                        ${price}
                      </p>
                    </div>

                    {/* Amount btns*/}
                    <div class="w-auto md:w-1/6 lg:w-2/12 px-4">
                      <div class="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                        <button class="py-2 hover:text-gray-700">
                          <svg
                            width="12"
                            height="2"
                            viewbox="0 0 12 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.35">
                              <rect
                                x="12"
                                width="2"
                                height="12"
                                transform="rotate(90 12 0)"
                                fill="currentColor"
                              ></rect>
                            </g>
                          </svg>
                        </button>
                        <p class="w-12 m-0 px-2 py-4 text-center  border-0 focus:ring-transparent focus:outline-none rounded-md">
                          {amount}
                        </p>
                        <button class="py-2 hover:text-gray-700">
                          <svg
                            width="12"
                            height="12"
                            viewbox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.35">
                              <rect
                                x="5"
                                width="2"
                                height="12"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="12"
                                y="5"
                                width="2"
                                height="12"
                                transform="rotate(90 12 5)"
                                fill="currentColor"
                              ></rect>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div class="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
                      <p class="text-lg text-tertiary-500 font-bold font-heading">
                        ${price}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div class="flex justify-between flex-wrap items-center lg:-mb-4">
              <Btn name="Clear cart" />
              <Btn name="Back to shop" />
            </div>
          </div>

          {/* Cart totals */}
          <div class="w-full xl:w-4/12 px-4">
            <div class="p-6 md:p-12 bg-black text-secondary-400">
              <h2 class="mb-6 text-4xl font-bold font-heading ">Cart totals</h2>
              <div class="flex mb-8 items-center justify-between pb-5 border-b border-blue-100">
                <span class="font-bold text-lg">Subtotal</span>
                <span class="text-xl font-bold font-heading text-secondary-200">
                  $89.67
                </span>
              </div>
              <h4 class="mb-2 font-bold text-left text-lg">Shipping</h4>
              <div class="flex mb-2 justify-between items-center">
                <span class="">Next day</span>
                <span class="text-xl font-bold font-heading text-secondary-200">
                  $11.00
                </span>
              </div>
              <div class="flex mb-10 justify-between items-center">
                <span class="">Shipping to United States</span>
                <span class="text-xl font-bold font-heading ">-</span>
              </div>
              <div class="flex mb-10 justify-between items-center">
                <span class="text-2xl font-bold font-heading ">
                  Order total
                </span>
                <span class="text-xl font-bold font-heading text-secondary-200">
                  $100.67
                </span>
              </div>
              <Link
                to="/shipping"
                class="block w-full py-4 bg-secondary-500 hover:bg-secondary-200 hover:text-secondary-900 text-center  font-bold font-heading uppercase rounded-md transition duration-200 text-secondary-50"
                href="#"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartContent;
